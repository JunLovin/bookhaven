import App from './App'
import DefaultError from './error/DefaultError'

const routes = [
    {
        path: '/',
        element: <App/>,
        errorElement: <DefaultError/>
    }
]

export default routes;