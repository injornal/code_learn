import Navbar from "../../components/Navbar/Navbar";
import style from './Home.module.css';

export default function () {
    return (
        <div className={style.homeContainer}>
            <Navbar />
            <p className={style.welcomeMessage}>Welcome home</p>
        </div>
    );
}
