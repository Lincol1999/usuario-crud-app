import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const VerUsuario = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    // console.log(id);

    const [usuario, setUsuario] = useState({});

    useEffect(() => {

        const obtenerUsuarioAPI = async () => {

            try {

                const url = `http://localhost:4000/usuario/${id}`;

                const respuesta = await fetch(url);

                const resultado = await respuesta.json();

                // console.log(resultado);
                setUsuario(resultado);

            } catch (error) {
                console.log(error);
            }


        }

        obtenerUsuarioAPI();

    }, [])


    return (
        <div>
            <h1 className="font-black text-4xl text-cyan-600">Ver Usuario: {usuario.nombre}</h1>
            <p className="mt-3 font-bold">
                Información del Usuario
            </p>

            {
                usuario.nombre && (
                    <p className="mt-10">
                        <span className="text-gray-600 uppercase font-bold">
                            Usuario: {''}
                        </span>

                        {usuario.nombre}
                    </p>
                )
            }

            {
                usuario.email && (
                    <p className="mt-10">
                        <span className="text-gray-600 uppercase font-bold">
                            email: {''}
                        </span>
                        {usuario.email}
                    </p>
                )
            }

            {
                usuario.genero && (
                    <p className="mt-10">
                        <span className="text-gray-600 uppercase font-bold">
                            genero: {''}
                        </span>

                        {usuario.genero}

                    </p>
                )
            }

            {
                usuario.telefono && (
                    <p className="mt-10">
                        <span className="text-gray-600 uppercase font-bold">
                            Teléfono: {''}
                        </span>

                        {usuario.telefono}
                    </p>
                )
            }

            {
                usuario.empresa && (
                    <p className='mt-10'>
                        <span className="text-gray-600 uppercase font-bold">
                            Empresa: {''}
                        </span>

                        {usuario.empresa}

                    </p>
                )
            }

            <button
                type='button'
                className="
                    bg-cyan-600 p-2 mt-3 rounded-md border-2 text-white uppercase font-bold
                "
                onClick={() => navigate('/usuarios')}
            >
                Volver
            </button>
        </div>
    )
}
