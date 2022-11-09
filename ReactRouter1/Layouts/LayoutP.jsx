import { Outlet } from "react-router-dom"

const LayoutP = () => {
    return (
        <>
        <div className="container">

        <Outlet />

        <footer> Footer </footer>
        </div>
        </>
    )
}

export default LayoutP;