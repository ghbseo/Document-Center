import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from '@/redux';
import Content from '@/Content';
import { LoginPage } from '@/pages';

const store = configureStore({
    reducer: rootReducer
});

function App() {
    const user = useSelector((state: RootState) => state.user);

    if (user.login) {
        return <Content />;
    } else {
        return <LoginPage />;
    }
}

function Root() {
    return (
        <Router>
            <Provider store={store}>
                <div className="App">
                    <App />
                </div>
            </Provider>
        </Router>
    );
}

export default Root;
