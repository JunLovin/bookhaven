import App from './App'
import DefaultError from './error/DefaultError'
import BookDetail from '@components/BookDetail';

const routes = [
    {
        path: '/',
        element: <App/>,
        errorElement: <DefaultError/>,
    },
    {
        path: '/book/:id',
        element:  <BookDetail/>,
        errorElement: <DefaultError/>
    }
]

export default routes;