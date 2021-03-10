import Link from 'next/link'

export default function Navigation() {
    return (
        <nav className="nav-bar">
            <img src="/icon-256.png" alt="journeymxn logo" className="small-logo" />

            <ul className="nav">
                <Link href="/">
                    <li className="nav__item">
                        <a href="#!" className="nav__link">
                            <span>Home</span>
                        </a>
                    </li>
                </Link>
                <Link href="/quiz">
                    <li className="nav__item">
                        <a href="#!" className="nav__link">
                            <span>Quiz</span>
                        </a>
                    </li>
                </Link>
                <Link href="/admin">
                    <li className="nav__item">
                        <a href="#!" className="nav__link">
                            <span>Admin</span>
                        </a>
                    </li>
                </Link>
                <Link href="/about">
                    <li className="nav__item">
                        <a href="#!" className="nav__link">
                            <span>About Us</span>
                        </a>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}