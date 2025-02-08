import { Outlet } from "react-router";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";

export const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}