import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import SelectTalle from "../../ejemplos/SelectTalle"



const talles = [
    {
        value: "L",
        label: "Grande"
    },
    {
        value: "M",
        label: "Mediana"
    },
    {
        value: "S",
        label: "Chica"
    },
]

const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(null)

    const handleAgregar = () => {
        console.log({
            ...item,
            cantidad,
            talle
        })
    }

    
    return (
        <div>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Categoria {item.category}</p>
            <p><strong>Precio: ${item.precio}</strong></p>
            <p>Subtotal: {item.precio * cantidad}</p>

            <SelectTalle setTalle={setTalle} options={talles}/> <br />

            <ItemCount
                cantidad={cantidad}
                setCantidad={setCantidad}
                stock={item.stock}
                agregar={handleAgregar}
            />
        </div>
    )
}

export default ItemDetail