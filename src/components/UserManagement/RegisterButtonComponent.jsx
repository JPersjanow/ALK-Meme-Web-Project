import { FaUserPlus } from "react-icons/fa6";

export const RegisterButtonComponent = () => {
    return (
        <button className="button-login group">
            <FaUserPlus className="button-submit-icon group-hover:text-2xl"></FaUserPlus>
            Register
        </button>
    )
}