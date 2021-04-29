import Link from 'next/link'

import styles from '../styles/components/navigation.module.scss'

export default function Navigation() {
    return (
        <nav className={styles["nav-bar"]}>
            <Link href="/">
                <a href="#!" className={styles["large-logo--link"]}>
                    <img src="/icon-full.png" alt="journeymxn logo" className={styles["large-logo"]} />
                </a>
            </Link>

            <ul className={styles["nav"]}>
                <Link href="/">
                    <li className={styles["nav__item"]}>
                        <svg className={styles["nav__icon"]} id="#home-nav" >
                            <use xlinkHref="/sprite.svg#icon-check_box" />
                        </svg>
                        <a href="#!" className={styles["nav__link"]}>
                            <span>home</span>
                        </a>
                    </li>
                </Link>
                <Link href="/quiz">
					<li className={styles["nav__item"]}>
                        <svg className={styles["nav__icon"]}>
                            <use xlinkHref="/sprite.svg#icon-check_box_outline_blank" />
                        </svg>
                        <a href="#!" className={styles["nav__link"]}>
                            <span>quiz</span>
                        </a>
                    </li>
                </Link>
                <Link href="/admin">
					<li className={styles["nav__item"]}>
                        <svg className={styles["nav__icon"]}>
                            <use xlinkHref="/sprite.svg#icon-check_box_outline_blank"></use>
                        </svg>
                        <a href="#!" className={styles["nav__link"]}>
                            <span>admin</span>
                        </a>
                    </li>
                </Link>
                <Link href="/about">
					<li className={styles["nav__item"]}>
                        <svg className={styles["nav__icon"]}>
                            <use xlinkHref="/sprite.svg#icon-check_box_outline_blank"></use>
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