export default function CustomFooter() {
    return (
        <footer>
            <div>
                <img src={new URL("../assets/logo.png", import.meta.url)} alt="Logo D'Tudo Shop" />
            </div>

            <p>&copy; {new Date().getFullYear()} D'Tudo Shop. Todos os direitos reservados.</p>
        </footer>
    )
}