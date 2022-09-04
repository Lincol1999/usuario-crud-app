import { useEffect } from 'react';
import { useState } from 'react';

import { Error } from '../Hooks/useError'

import { useNavigate } from 'react-router-dom'


export const Formulario = ({ usuario, setUsuario }) => {


    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [genero, setGenero] = useState('');
    const [telefono, setTelefono] = useState('');
    const [empresa, setEmpresa] = useState('');

    const [error, setError] = useState(false);


    useEffect(() => {
        if (JSON.stringify(usuario) !== '{}') {
            setNombre(usuario?.nombre ?? nombre);
            setEmail(usuario?.email ?? email);
            setGenero(usuario?.genero ?? genero);
            setTelefono(usuario?.telefono ?? telefono);
            setEmpresa(usuario?.empresa ?? empresa);
        }
    }, [usuario])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([nombre, email, genero, telefono, empresa].includes('')) {
            setError(!error);
            return;
        }

        const objUsuario = {
            nombre,
            email,
            genero,
            telefono,
            empresa,
        }

        try {
            let respuesta;


            if (usuario?.id) {

                const url = `http://localhost:4000/usuario/${usuario.id}`;
                respuesta = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(objUsuario),

                    headers: { 'Content-Type': 'application/json' },
                });
                setUsuario({})
            } else {

                const url = 'http://localhost:4000/usuario';

                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(objUsuario),

                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }


            const resultado = await respuesta.json();

            navigate('/usuarios')

        } catch (error) {
            console.log(error);
        }

    }



    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {
                    error && (
                        <Error>
                            <p>Todos los campos son obligatorios</p>
                        </Error>
                    )
                }
                <div className="mb-5">
                    <label htmlFor='nombre' className=" 
                        block 
                        text-gray-700 
                        uppercase 
                        font-bold">
                        Nombre del Usuario
                    </label>

                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id='nombre'
                        type="text"
                        placeholder='Ingrese el nombre'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}

                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor='email'
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Ingrese el Email
                    </label>

                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id='email'
                        type="text"
                        placeholder='correo@correo.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                </div>

                <div className="mb-5">
                    <label
                        htmlFor='genero'
                        className="block uppercase font-bold text-gray-700"
                    >
                        Ingrese el genero</label>
                    <input
                        id='genero'
                        className="border-2 p-2 mt-2 w-full rounded-md placeholder-gray-400"
                        type="text"
                        placeholder='Femenino | Masculino'
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor='telefono'
                        className="block uppercase font-bold text-gray-700"
                    >
                        Ingrese el Teléfono
                    </label>

                    <input
                        id='telefono'
                        type="number"
                        className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400"
                        value={telefono}
                        onChange={(e) => setTelefono(Number(e.target.value))}

                    />

                </div>

                <div className="mb-5">
                    <label
                        htmlFor='empresa'
                        className="block uppercase font-bold text-gray-700"
                    >
                        Nombre de la empresa
                    </label>

                    <input
                        id='empresa'
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        type="text"
                        placeholder='Ejempllo S.A'
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}

                    />
                </div>

                <button
                    className="mt-2 p-3  bg-teal-600 hover:bg-teal-700 cursor-pointer rounded-xl text-white font-bold"
                >

                    {
                        (usuario?.nombre) ? 'Editar Usuario' : 'Agregar Usuario'
                    }
                </button>

            </form>
        </div>
    )
}
