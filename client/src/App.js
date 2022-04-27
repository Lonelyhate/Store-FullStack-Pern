import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check, setIsAuth } from './store/actions/user';

function App() {
    const user = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check()
            .then((data) => {
                dispatch(setIsAuth(data));
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        !loading && (
            <div className="App">
                <NavBar />
                <AppRouter />
            </div>
        )
    );
}

export default App;
