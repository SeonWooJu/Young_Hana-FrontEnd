import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import {CookiesProvider} from "react-cookie";
import yxios from "./assets/util/yxios.js";

function App() {
    const [checkAccessToken, setCheckAccessToken] = useState(false);

    useEffect(() => {
        yxios.get("/v1/helloworld")
            .then((res) => {
                setCheckAccessToken(true);
            })
            .catch(() => {
                setCheckAccessToken(false);
            })
    }, [])

    return (
        <BrowserRouter>
            {!checkAccessToken ?
                <Routes>
                    <Route path="/" element={<Navigate replace to="/login" />} />
                    <Route path="/login/:student_no" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                :
                <Routes>
                    <Route path="/" element={<Navigate replace to="/index" />} />
                    <Route path="/index" element={<Index />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            }
        </BrowserRouter>
    );
}

ReactDOM.render(<CookiesProvider><App /></CookiesProvider>, document.getElementById("root"));
