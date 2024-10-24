import React from "react"
import { Link, useNavigate } from "react-router-dom"


export default function Item({ id, nombre, precio, imagen }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/producto/${id}`)
  }

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl  from-blue-50 to-indigo-100">
      <Link to={`/producto/${id}`} onClick={handleClick} className="block">
        <div className="p-6">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <img
              src={imagen}
              alt={nombre}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 hover:bg-opacity-10"></div>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-800 line-clamp-2">{nombre}</h2>
          <p className="mt-2 text-xl font-bold 	">${precio.toFixed(2)}</p>
        </div>
        <div className="px-6 pb-6">
          <button 
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-400 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault()
              handleClick()
            }}
          >
            Ver detalles
          </button>
        </div>
      </Link>
    </div>
  )
}