import { FC } from "react";
import LogoFucsia from "../../../../../../assets/img/logo-fucsia-ada.png";

const Logo: FC = () => {
    return (
        <div className="d-flex justify-content-center mb-4">
            <img src={LogoFucsia} alt="ADA admin logo" height="50" />
        </div>
    );
};

export { Logo };