import React, { useState, useEffect } from 'react';

const NotificationModal = ({ message, isVisible, onClose }) => {
    const [shouldRender, setShouldRender] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
            setIsFadingOut(false);

            const timerShow = setTimeout(() => {
                const modalElement = document.querySelector('.modal');
                if (modalElement) {
                    modalElement.classList.add('visible');
                }
            }, 10);

            const timerHide = setTimeout(() => {
                setIsFadingOut(true);
            }, 3000);

            return () => {
                clearTimeout(timerShow);
                clearTimeout(timerHide);
            };
        }
    }, [isVisible]);

    useEffect(() => {
        if (isFadingOut) {
            const modalElement = document.querySelector('.modal');
            if (modalElement) {
                modalElement.classList.remove('visible');
                modalElement.classList.add('hidden');
            }

            const timerCompleteHide = setTimeout(() => {
                setShouldRender(false);
                onClose();
            }, 500);

            return () => {
                clearTimeout(timerCompleteHide);
            };
        }
    }, [isFadingOut, onClose]);

    if (!shouldRender) {
        return null;
    }

    return (
        <div className={`modal ${isFadingOut ? 'hidden' : ''}`}>
            <p>{message}</p>
        </div>
    );
};

export default NotificationModal;
