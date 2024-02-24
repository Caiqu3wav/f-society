'use client';
import { useEffect, useState } from "react";
import "./Modal.css"

interface ModalProps {
    closeModal: () => void;
    isOpen: boolean;
    linkEp: string | null;
  }

export default function Modal({ closeModal, isOpen, linkEp }: ModalProps) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(isOpen);

    
   
    useEffect(() => {
        setModalIsOpen(isOpen);
      }, [isOpen]);
       

      if (!isOpen) {
        return null;
      }


    return(
        <div className={`modal-overlay ${modalIsOpen ? 'modal-open' : ''}`} onClick={closeModal}>
      <div className={`modal-content ${modalIsOpen ? 'modal-open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <video controls crossOrigin="anonymous" playsInline>
        <source src={`/proxy-video?url=${linkEp}`} type="video/mp4" />
        </video>
      </div>
      </div>
    );
}