import { createGlobalStyle } from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from './Context/Context'

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Registro from "./pages/Registro";
import Saida from "./pages/Saida";
import Entrada from "./pages/Entrada";

import { useState } from "react";


export default function App() {

    const listaLogin = localStorage.getItem("login");
    const localToken= JSON.parse(listaLogin)
    
    const [userData, setUserData] = useState(localToken);

    localStorage.setItem("login", JSON.stringify(userData))

    
    
   

    
    

    return (
        <>
            <UserContext.Provider value={{ userData, setUserData}}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/registro" element={<Registro />} />
                        <Route path="/saida" element={<Saida />} />
                        <Route path="/entrada" element={<Entrada />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing:border-box;
        margin:0;
        background-color:#8D35BE;
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a{
        text-decoration:none;
    }
    }
    
`