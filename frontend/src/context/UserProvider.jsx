import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [state, setState] = useState({});

    return (
        <UserContext.Provider value={{

        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;