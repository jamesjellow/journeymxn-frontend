import { useRouter } from 'next/router'

import styles from '../styles/components/navigation.module.scss'
import {useState, useDispatchState} from '../components/context'

export default function Navigation() {
    const router = useRouter();
    const state = useState();
    const dispatch = useDispatchState();

    const handlePageChange = (page_num, path) => {
        return (event) => {
            event.preventDefault();
            dispatch({type: 'NAV-CHANGE', "page_num": page_num});
            router.push(path);
        };
    };

    const getIconUrl = (state, page_num) => {
        if (state.page_num == page_num)
            return "/sprite.svg#icon-check_box"
        return "/sprite.svg#icon-check_box_outline_blank"
    };

    return (
        <nav className={styles["nav-bar"]}>
            <a href="#!" className={styles["large-logo--link"]} onClick={handlePageChange(1, '/')}>
                <img src="/icon-full.png" alt="journeymxn logo" className={styles["large-logo"]} />
            </a>
            <ul className={styles["nav"]}>
                <li className={styles["nav__item"]} onClick={handlePageChange(1, '/')}>
                    <svg className={styles["nav__icon"]} id="#home-nav" >
                        <use xlinkHref={getIconUrl(state, 1)} />
                    </svg>
                    <a href="#!" className={styles["nav__link"]}>
                        <span>home</span>
                    </a>
                </li>
                <li className={styles["nav__item"]} onClick={handlePageChange(2, '/quiz')}>
                    <svg className={styles["nav__icon"]}>
                        <use xlinkHref={getIconUrl(state, 2)} />
                    </svg>
                    <a href="#!" className={styles["nav__link"]}>
                        <span>quiz</span>
                    </a>
                </li>
                <li className={styles["nav__item"]} onClick={handlePageChange(3, '/admin')}>
                    <svg className={styles["nav__icon"]}>
                        <use xlinkHref={getIconUrl(state, 3)}></use>
                    </svg>
                    <a href="#!" className={styles["nav__link"]}>
                        <span>admin</span>
                    </a>
                </li>
                <li className={styles["nav__item"]} onClick={handlePageChange(4, '/about')}>
                    <svg className={styles["nav__icon"]}>
                        <use xlinkHref={getIconUrl(state, 4)}></use>
                    </svg>
                    <a href="#!" className={styles["nav__link"]}>
                        <span>about</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}