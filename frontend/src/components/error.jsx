import { useState, useEffect } from 'react';

const Error = ({ show = false, content }) => {
    const [showerr, setShowerr] = useState(show);
    useEffect(() => {
        setShowerr(show);
    }, [show]);
    useEffect(() => {
        if (showerr) {
            const timer = setTimeout(() => {
                setShowerr(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showerr]);

    return (
        <>{showerr && <div className="z-10 fixed top-5 ml-5 flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>{content}</div>
        </div>}</>
    )
}

export default Error;