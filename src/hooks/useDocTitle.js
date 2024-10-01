import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - V-Bluetooth`;
        } else {
            document.title = 'V-Bluetooth | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
