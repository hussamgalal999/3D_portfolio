import { useState } from 'react';

/**
 * Custom hook to manage alert state.
 */
const useAlert = () => {
    const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

    /**
     * Displays an alert with the specified text and type.
     */
    const showAlert = ({ text, type = 'danger' }) => setAlert({ show: true, text, type });
    /**
     * Hides the alert by setting its visibility to false and clearing its text and type.
     */
    const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

    return { alert, showAlert, hideAlert };
};

export default useAlert;
