const CustomHeader = () => {
    return (
        <header>
            <a href="/" className="logo">
                <img src={new URL("../assets/logo.png", import.meta.url)} alt="logo" style={{ width: 100 }}/>
            </a>

            <nav>
                <ul>
                    <li>
                        <a href="">Sobre nós</a>
                    </li>
                    <li>
                        <a href="">Contactos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default CustomHeader;