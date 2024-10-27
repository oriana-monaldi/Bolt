import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const docRef = doc(db, "Item", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    return {
                        id: docSnap.id,
                        ...docSnap.data()
                    };
                } else {
                    console.log("No se encontró el producto!");
                    return null;
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
                return null;
            }
        };

        fetchProductById()
            .then((response) => {
                setItem(response);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error en el fetchProductById:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    }

    if (!item) {
        return <div>Product not found</div>;
    }

    return (
        <div className="flex flex-col items-center p-6">
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;