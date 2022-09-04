import { useNavigate } from 'react-router-dom'


export const Usuario = ({ usuario, handleEliminar }) => {

    const navigate = useNavigate();

    const { nombre, email, genero, telefono, empresa, id } = usuario;

    return (
        <tr >
            <td className="p-3 ">{nombre}</td>
            <td className="p-3 ">
                <p>
                    <span className="text-gray-800 uppercase font-bold">Email: </span>
                    {email}</p>
                <p>
                    <span className="text-gray-800 uppercase font-bold">Teléfono: </span>
                    {telefono}</p>
            </td>
            <td className="p-3 ">{genero}</td>
            <td className="p-3 ">{empresa}</td>

            <td className="p-3 ">
                <button
                    type="button"
                    className="
                        w-full
                        text-white
                        font-bold
                        uppercase p-2 
                        bg-yellow-400 hover:bg-yellow-500 border-2 rounded-lg "

                    onClick={() => navigate(`editar/${id}`)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="
                        w-full
                        text-white
                        font-bold
                        uppercase p-2 
                        bg-green-600 hover:bg-green-700 border-2 rounded-lg "
                    onClick={() => navigate(`/usuarios/${id}`)}
                >
                    Ver
                </button>

                <button
                    type="button"
                    className="
                        w-full
                        text-white
                        font-bold
                        uppercase p-2 
                        bg-red-600 hover:bg-red-700 border-2 rounded-lg "
                    onClick={() => handleEliminar(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
