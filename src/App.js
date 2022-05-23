import Login from './components/auth/login';
import Quiz from './components/quizTaker/quiz';
import Profile from './components/quizTaker/profile';
import Error from './components/error/Error';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route index path="/quiz" element={<Quiz />} />
                    <Route index path="/profile" element={<Profile />} />
                    {/* <Route path="/logout" element={<SignOut />} /> */}
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
//test