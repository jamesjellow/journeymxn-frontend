import { useRouter } from 'next/router'
import useEffect from 'react';

import styles from '../styles/components/navigation.module.scss'
import {useState, useDispatchState} from '../components/context'

export default function Navigation() {
    const router = useRouter();
    const state = useState();
    const dispatch = useDispatchState();
    

    const handlePageChange = (path) => {
        return (event) => {
            event.preventDefault();
            router.push(path);
        };
    };

    const getIconUrl = (path) => {
        let pathname = router.pathname;

        if (path == pathname)
            return "/sprite.svg#icon-check_box"
        return "/sprite.svg#icon-check_box_outline_blank"
    };

    return (
        <nav className={styles["nav-bar"]}>
            <a href="#!" className={styles["large-logo--link"]} onClick={handlePageChange('/')}>
                <img src="/icon-full.png" alt="journeymxn logo" className={styles["large-logo"]} />
            </a>
            <ul className={styles["nav"]}>
                <li className={styles["nav__item"]} onClick={handlePageChange('/')}>
                    <svg className={styles["nav__icon"]} id="#home-nav" >
                        <use xlinkHref={getIconUrl('/')} />
                    </svg>
                    <a href="#!" className={styles["nav__link"]}>
                        <span>home</span>
                    </a>
                </li>
                <li className={styles["nav__item"]} onClick={handlePageChange('/quiz')}>
                    <svg className={styles["nav__icon"]}>
                        <use xlinkHref={getIconUrl('/quiz')} />
                    </svg>
                    <a href="#!" className={styles["nav__link"]}>
                        <span>quiz</span>
                    </a>
                </li>
                <li className={styles["nav__item"]} onClick={handlePageChange('/about')}>
                    <svg className={styles["nav__icon"]}>
                        <use xlinkHref={getIconUrl('/about')}></use>
                    </svg>
                    <a href="#!" className={styles["nav__link"]}>
                        <span>about</span>
                    </a>
                </li>
                <li className={styles["nav__item"]} onClick={handlePageChange('/admin')}>
                    <svg className={styles["nav__icon"]}>
                        <use xlinkHref={getIconUrl('/admin')} />
                    </svg>
                    <a href="#!" className={styles["nav__link"]}>
                        <span>admin</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}