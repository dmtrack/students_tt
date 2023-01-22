import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './App/components/Navigation';
import { AuthPage } from './App/layouts/AuthPage';
import { MainPage } from './App/layouts/Mainpage';

const App: React.FC = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </>
    );
};

export default App;
