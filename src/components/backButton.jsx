import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Back() {
    const navigate = useNavigate();
    return (
        <button className="back" onClick={() => navigate(-1)}>
            <IoIosArrowBack size={30} color="#000" />
        </button>
    )
}