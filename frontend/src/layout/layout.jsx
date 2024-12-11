import { useEffect } from 'react';
import Error from '../components/error';
import useError from '../hooks/useError';

const Layout = ({ children }) => {
    const { error } = useError();

    return (
        <>
            <Error show={Boolean(error)} content={error} />
            {children}
        </>
    )
}

export default Layout;