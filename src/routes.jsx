import App from './App'
import BookHavenInfo from '@components/BookHavenInfo';
import DefaultError from './error/DefaultError'
import BookDetail from '@components/BookDetail';
import Creator from './components/Creator';
import Contact from './components/Contact';

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
    },
    {
        path: '/BookHaven',
        element: <BookHavenInfo/>,
        errorElement: <DefaultError/>
    },
    {
        path: '/Creator',
        element: <Creator/>,
        errorElement: <DefaultError/>
    },
    {
        path: '/Contact',
        element: <Contact/>,
        errorElement: <DefaultError/>
    }
]

export default routes;