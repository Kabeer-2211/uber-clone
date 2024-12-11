import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const useSession = () => {
    return useContext(UserContext);
};

export default useSession;