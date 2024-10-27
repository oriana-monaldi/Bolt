import React, { useState } from "react";

function CreditCardForm() {
const [cardData, setCardData] = useState({
cardNumber: "",
expiryDate: "",
cvc: "",
name: "",
});

const handleInputChange = (e) => {
const { name, value } = e.target;
setCardData((prevData) => ({
    ...prevData,
    [name]: value,
}));
};

return (
<div >
    <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-6 rounded-lg mb-4">
    <div className="flex justify-between">
        <div>
        <p className="text-lg font-bold">{cardData.name || "NOMBRE COMPLETO"}</p>
        <p className="text-xl mb-2">
            {cardData.cardNumber || "XXXX XXXX XXXX XXXX"}
        </p>
        <p className="text-sm">
            Vence: {cardData.expiryDate || "MM/YY"}
        </p>
        </div>
        <div className="text-right">
        <p className="text-sm">CVC: {cardData.cvc || "XXX"}</p>
        </div>
    </div>
    </div>

    <form className="space-y-4">
    <div>
        <label className="block mb-1">Nombre Completo</label>
        <input
        type="text"
        name="name"
        value={cardData.name}
        onChange={handleInputChange}
        placeholder="Nombre en la tarjeta"
        className="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        />
    </div>

    <div>
        <label className="block mb-1">Número de Tarjeta</label>
        <input
        type="text"
        name="cardNumber"
        value={cardData.cardNumber}
        onChange={handleInputChange}
        placeholder="1234 5678 9123 4567"
        className="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength="16"
        required
        />
    </div>

    <div className="flex space-x-4">
        <div className="flex-1"> 
        <label className="block mb-1">Fecha de Vencimiento</label>
        <input
            type="text"
            name="expiryDate"
            value={cardData.expiryDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            className="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength="5"
            required
        />
        </div>

        <div className="flex-1"> 
        <label className="block mb-1">CVC</label>
        <input
            type="text"
            name="cvc"
            value={cardData.cvc}
            onChange={handleInputChange}
            placeholder="CVC"
            className="w-full border p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength="3"
            required
        />
        </div>
    </div>


    </form>
</div>
);
}

export default CreditCardForm;
