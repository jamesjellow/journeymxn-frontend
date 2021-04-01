import Link from 'next/link'

import styles from '../styles/components/navigation.module.scss'

export default function Navigation() {
    return (
        <nav className={styles["nav-bar"]}>
            <img src="/icon-256.png" alt="journeymxn logo" className={styles["small-logo"]} />

            <ul className={styles["nav"]}>
                <Link href="/">
                    <li className={styles["nav__item"]}>
                        <a href="#!" className={styles["nav__link"]}>
                            <span>Home</span>
                        </a>
                    </li>
                </Link>
                <Link href="/quiz">
					<li className={styles["nav__item"]}>
                        <a href="#!" className={styles["nav__link"]}>
                            <span>Quiz</span>
                        </a>
                    </li>
                </Link>
                <Link href="/admin">
					<li className={styles["nav__item"]}>
                        <a href="#!" className={styles["nav__link"]}>
                            <span>Admin</span>
                        </a>
                    </li>
                </Link>
                <Link href="/about">
					<li className={styles["nav__item"]}>
                        <a href="#!" className={styles["nav__link"]}>
                            <span>About Us</span>
                        </a>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}