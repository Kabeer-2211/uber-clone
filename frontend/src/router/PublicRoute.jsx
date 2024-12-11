import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/user';

const PublicRoute = ({ children }) => {
    const token = getToken();
    if (token) {
        return <Navigate to="/home" replace />
    }
    return children;
}

export default PublicRoute;