import React, {useEffect} from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps{
    overlayClose?: boolean;
    onClose(): void;
}

export const Portal:React.FC = ({children}) => {
    useEffect(() => {
        document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = `position: "";  top: "";`;
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, []);
    const rootElement = document.getElementById("modal") as Element;   
    return createPortal(children, rootElement);
}

export default Portal;