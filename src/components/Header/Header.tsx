import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean,
    login: string | null |undefined,
    logout: () => void
}

function Header(props: HeaderType) {
    return <header className={s.header}>
        <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAeFBMVEX29vYAAAD4+Pj8/Pz////x8fHu7u709PRNTU3q6urU1NTIyMjj4+Pa2trOzs5BQUGZmZmgoKC+vr5kZGS4uLh0dHQXFxdHR0eSkpKKiop7e3spKSmrq6vg4OAvLy9wcHAiIiI3NzdUVFReXl6wsLALCwsTExOEhIRuUWg1AAAD3ElEQVR4nO3b2XaqMBQGYLKDyCQyqSjOQ33/N2wiOIMDFWvw/y7OWueiJfnJzqTVNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICHEb37eW9+4LNIo3b4nkbuHkKcG4794aFo+tZ9TxNJ5MGtcZTYb3ncH/BhwLX6QxF5kBuO0um4xekNz6uONH3MeG0tpPxf4rrmDE3GIo/qe9qrcIeJYVInMUDanUDkwfq+pX/69Cpwm/1Y9a0DYnzQZN2bikCYuW7zT0+E5KRnzdlIr+mXiwnVCEcLttOz+ecXTVbmXca815ZOtuDKFddLzCwPNvVdXYFAskhmjM1fO55J5qGTHazmeSDMjD99pTnBfdHi0UuHiVxgJuNos8+DbXq2/vHTyJFYcoTwZZnICcSN9xNIVjSBIkWTI+tHNnvykjbvJhBn2GWnliEpNEQ02YulbHe//fdWi4IxPH95lgfrjzqyaFSKRNP9XdO7f2l0NqHySRDNzwNh07GhVNHsUCdfFP7wJkW9aJO4t2GXVo6uwmbknBjTeembFc9/coBY4XZwlQfrDye6Mkvvqbxy5Dh5/oflhNr2/O51HqIW5Q7+9e2tnXiLk30f0ifeKOUTSMsOoqI8GJt5ChZNTp8duuE+PqGQDMRdz6bFgbBErc3IOe4dO7J+cM8m8iAxgVwuMAdmrMDNSDniJ0N/efNYTPuf0A3ncKQroMixt9x+Hc44NwcKaVwcYWx/eb3iHqSBpXYg2tlsIixa5f2Rl6id8axfnofYjKi2gy9CxkWn5Es+75T8n8hDt86PdAVGHcWLJsODyzdt8NNQKNuBWOHwTh5sEbTU3J5d4VdzZRry3SUHZeutmEA8f3UnD8YiR5N3RQ2IhMgtmC4XiW3JPEgzOmGyujGh5n62Ey4n5wYkIteRuKSbaXcw6KZ305AG8tjbhDhyfPtQt2+IHNrdjDQmlPwuqbJ06OZnmsZEInpSuj1/gLluKXymKdWunojcwf938+tAVTNZZJ/2NnCUUMVMzFBrwn61WJVM+tuOundF94k1dPFkItPAUP+QdxvvPZXIyuHqfNpbVek+toC8g29w0RyQcfM65LRo8s3IF4TC/ftxMHkH38zNSDG6f9Db+O431MzR+X1sATOmJu7gb+L2jUD6W7mD/7ZIRCidsoNgFBrfVTRHvJ1c55HO4pbe/M1IKdLd4PRLAWkUeK38m2ffmkn2BxLe2E+SZBzbhvwyGuUfk/93y/7V7g8lJMW+Y1UrJAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQyS/u8yMIjOt1zgAAAABJRU5ErkJggg=="
            alt=""/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}

export default Header;