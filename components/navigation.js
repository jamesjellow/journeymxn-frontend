import Link from 'next/link'
import { Router, useRouter } from 'next/router'

import styles from '../styles/components/navigation.module.scss'
import {useState, useDispatchState} from '../components/context'

export default function Navigation() {
    const router = useRouter();
    const state = useState();
    console.log(state);
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
                <Link href="/admin">
					<li className={styles["nav__item"]} onclick={handlePageChange(3)}>
                        <svg className={styles["nav__icon"]}>
                            <use xlinkHref={getIconUrl(state, 3)}></use>
                        </svg>
                        <a href="#!" className={styles["nav__link"]}>
                            <span>admin</span>
                        </a>
                    </li>
                </Link>
                <Link href="/about">
					<li className={styles["nav__item"]}>
                        <svg className={styles["nav__icon"]}>
                            <use xlinkHref={getIconUrl(state, 3)}></use>
                        </svg>
                        <a href="#!" className={styles["nav__link"]}>
                            <span>about</span>
                        </a>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}