import { useEffect } from "react";
import { useState } from "react";
import { Usuario } from "../components/Usuario";

export const Inicio = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        const obtenerUsuariosAPI = async () => {
            try {
                const url = 'http://localhost:4000/usuario';
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                // console.log(resultado);
                setUsuarios(resultado);

            } catch (error) {
                console.log(error);
            }
        }

        obtenerUsuariosAPI();

    }, []);

    const handleEliminar = async (id) => {

        const confirmar = confirm('¿Desea eliminar el registro?');

        if (confirmar) {

            try {

                const url = `http://localhost:4000/usuario/${id}`
                const respuesta = await fetch(url, {
                    method: 'DELETE',
                })

                await respuesta.json();

                const UsuarioFiltrados = usuarios.filter((usuario) => usuario.id !== id);
                setUsuarios(UsuarioFiltrados);

            } catch (error) {
                console.log(error);
            }
        }

    }


    return (
        <>
            <h1 className="font-black text-4xl ">Usuarios</h1>

            <p className="mt-3">Administra tus Usuarios</p>

            <table className="w-full mt-5 table-auto shadow bg-white">
                <thead className="dark:bg-gray-900 text-white">
                    <tr>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Género</th>
                        <th className="p-2">Empresa</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        usuarios.map((usuario) => (
                            <Usuario
                                key={usuario.id}
                                usuario={usuario}

                                handleEliminar={handleEliminar}
                            />
                        ))
                    }
                </tbody>
            </table>

        </>
    )
}
