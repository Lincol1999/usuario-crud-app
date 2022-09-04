import { Routes, Route } from 'react-router-dom'

import { EditarUsuario, Inicio, NuevoUsuario, VerUsuario, Default } from '../pages'
import { Layout } from '../ui/Layout'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/usuarios' element={<Layout />} >

                <Route index element={<Inicio />} />

                <Route path='nuevo' element={<NuevoUsuario />} />

                <Route path='editar/:id' element={<EditarUsuario />} />

                <Route path=':id' element={<VerUsuario />} />

            </Route>

            <Route path='/' element={<Layout />} >

                <Route index element={<Default />} />
            </Route>


        </Routes>
    )
}
