import React from "react";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../../../context/user";

const UsuarioGenerico = () => {
    let params = useParams();
    const { userData } = useUser();

    console.log('params', params);
    return (
        <div>
            Página {params.nombreusuario} la suma es {userData.resultado}
            <Link to="/">
                Ir al index
            </Link>
            </div>);
};

export default UsuarioGenerico;
