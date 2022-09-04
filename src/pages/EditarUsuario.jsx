import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Formulario } from '../components/Formulario';

export const EditarUsuario = () => {

    const [usuario, setUsuario] = useState({});

    const { id } = useParams();

    useEffect(() => {

        const obtenerUsuarioAPI = async () => {

            const url = `http://localhost:4000/usuario/${id}`

            const respuesta = await fetch(url);

            const resultado = await respuesta.json();



            setUsuario(resultado);

        }

        obtenerUsuarioAPI();
    }, [])



    return (
        <>

            <h1 className="font-black text-4xl text-cyan-600">Editar Usuario: {usuario.nombre}</h1>
            <p className="mt-3 font-bold">
                Información del Usuario
            </p>

            {
                usuario?.nombre
                    ? (
                        <Formulario
                            usuario={usuario}
                            setUsuario={setUsuario}
                        />
                    )

                    :
                    <p>Usuario con el ID no válido</p>
            }
        </>
    )
}


