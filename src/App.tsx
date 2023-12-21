import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';

export default function App() {
    return (
        <BrowserRouter>
            <header className="h-20 bg-primary flex items-center p-4">
                <h1 className="text-3xl text-black">Title</h1>
            </header>
            <main className="flex flex-col p-4 h-full">
                <Route path="/" component={Login} />
            </main>
        </BrowserRouter>
    )
}
