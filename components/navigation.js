export default function Header() {
    return (
        <header className="nav-bar">
            <img src="/icon-256.png" alt="journeymxn logo" className="small-logo" />

            <ul className="nav">
                <li className="nav__item">
                    <a href="/" className="nav__link">
                        <span>Home</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/quiz" className="nav__link">
                        <span>Quiz</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/admin" className="nav__link">
                        <span>Admin</span>
                    </a>
                </li>
            </ul>
        </header>
    )
}