import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/user';
import useSession from '../hooks/useSession';

const PrivateCaptainRoute = ({ children }) => {
    const token = getToken();
    const { isCaptain } = useSession();
    if (!token) {
        return <Navigate to="/login" replace />
    }
    if (!isCaptain) {
        return <Navigate to="/home" replace />
    }
    return children;
}

export default PrivateCaptainRoute;