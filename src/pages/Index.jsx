import React, { useState, useEffect } from 'react'
import { useUser } from '../context/user';
import { Link } from "react-router-dom";
import { useDark } from '../context/dark';


const Index = () => {
    const { userData, setUserData } = useUser();
    const { dark } = useDark();
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        console.log('useEffect que se ejecuta una sola vez');
        console.log('info del usuario', userData);
    }, [userData]);

    useEffect(() => {
        console.log("Cambiaron los valores, ahora son: ", "V1: ", valor1, "V2", valor2);
        setResultado(valor1 +  valor2);
    }, [valor1, valor2]);

    return (
        <div className={`container ${dark ? "fondo-Oscuro" : "fondo-Claro"}`}>
            <input 
                value={valor1}
                onChange={(e) => setValor1(parseInt(e.target.value))}
                placeholder="Valor 1" type='number' />
            <input
                value={valor2}
                onChange={(e) => setValor2(parseInt(e.target.value))}
                placeholder="Valor 2" type='number' />
            <span>La suma de los valores es: { resultado }</span>
            <button onClick={()=>setUserData({...userData, resultado:resultado})}>Guardar Suma</button>
            <Link to='/admin/usuarios/oscar'>Ir a usuarios</Link>
            <Link to='/configuracion'>Ir a la pagina de config</Link>
        </div>
    )
}

export default Index;
