import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Checkout() {
const { cart, getTotalPrice, clearCart } = useCart();
const navigate = useNavigate();
const [formData, setFormData] = useState({
nombre: "",
email: "",
telefono: "",
calle: "",
numero: "",
piso: "",
depto: "",
});

const handleSubmit = (e) => {
e.preventDefault(); 
swal({
    title: "Gracias por tu compra!",
    text: "Te enviaremos un mail con los pasos a seguir",
    icon: "success",
    timer: 3000,
    buttons: false,
}).then(() => {
    clearCart(); 
    navigate("/"); 
});
};

const handleInputChange = (e) => {
setFormData({
    ...formData,
    [e.target.name]: e.target.value,
});
};

if (cart.length === 0) {
return navigate("/");
}

return (
<div className="container mx-auto p-8">
    <h2 className="text-2xl mb-6">Checkout</h2>
    <div className="grid grid-cols-2 gap-8">
    <div>
        <h3 className="text-xl mb-4">Detalles de contacto</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block mb-1">Nombre completo</label>
            <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded"
            />
        </div>
        <div>
            <label className="block mb-1">Email</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded"
            />
        </div>
        <div>
            <label className="block mb-1">Telefono</label>
            <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded"
            pattern="[0-9]*"
            />
        </div>
        <h3 className="text-xl">Dirección</h3>
        <div className="flex">
            <div className="pr-4">
            <label className="block mb-1">Calle</label>
            <input
                type="text"
                name="calle"
                value={formData.calle}
                onChange={handleInputChange}
                required
                className="w-full border p-2 rounded"
            />
            </div>
            <div className="pr-4">
            <label className="block mb-1">Número</label>
            <input
                type="tel"
                name="numero"
                value={formData.numero}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
                pattern="[0-9]*"
            />
            </div>
        </div>
        <div className="flex">
            <div className="pr-4">
            <label className="block mb-1">Piso</label>
            <input
                type="text"
                name="piso"
                value={formData.piso}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
            />
            </div>
            <div className="pr-4">
            <label className="block mb-1">Depto</label>
            <input
                type="text"
                name="depto"
                value={formData.depto}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
            />
            </div>
        </div>
        <button
            type="submit"
            className="w-full mt-6 bg-black text-white py-2 rounded"
        >
            Confirmar compra
        </button>
        </form>
    </div>
    <div>
        <h3 className="text-xl mb-4">Resumen de la compra</h3>
        <div className="border p-4 rounded">
        {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
            <span>
                {item.nombre} x{item.quantity}
            </span>
            <span>${item.precio * item.quantity}</span>
            </div>
        ))}
        <div className="border-t mt-4 pt-4">
            <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${getTotalPrice()}</span>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
);
}

export default Checkout;
