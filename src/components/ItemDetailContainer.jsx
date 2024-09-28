import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import productos from "../stock";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const producto = productos.find(
                        (p) => p.id === parseInt(id)
                    );
                    resolve(producto);
                }, 2000);
            });
        };

        fetch().then((response) => {
            setItem(response);
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
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="flex flex-col items-center p-4">
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;