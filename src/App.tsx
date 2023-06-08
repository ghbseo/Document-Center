import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from '@/redux';
import Content from '@/Content';
import { Global } from '@emotion/react';
import { font } from '@/themes/dx.material.custom-scheme/Font';
import '@/themes/dx.material.custom-scheme/dx.material.custom-scheme.css';
// import '@/themes/dx.material.custom-scheme/dx.material.custom-scheme.css';

const store = configureStore({
    reducer: rootReducer
});

function App() {
    const user = useSelector((state: RootState) => state.user);

    if (user.login) {
        return <Content />;
    } else {
        return <></>;
    }
}

function Root() {
    return (
        <Router>
            <Provider store={store}>
                <Global styles={font} />
                <div className="App">
                    <App />
                </div>
            </Provider>
        </Router>
    );
}

export default Root;
