import { Outlet } from "react-router-dom"

const LayoutP = () => {
    return (
        <>
        <body className="container">
        <Outlet />
        </body>
        </>
    )
}

export default LayoutP;