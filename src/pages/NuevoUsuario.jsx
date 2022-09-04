import { Formulario } from "../components/Formulario"


export const NuevoUsuario = () => {
    return (
        <>
            <h1 className="font-black text-4xl">Nuevo Usuario</h1>

            <p className="mt-3">
                Llena los siguientes campos para registrar un Usuario
            </p>

            <Formulario />
        </>
    )
}
