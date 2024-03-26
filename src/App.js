"use client";
import { useEffect, useState, useRef } from "react";

// isOpen true olduğunda Modalı açalım
export default function App() {
  const [isOpen, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      {!isOpen && (
        <button onClick={openModal} className="mx-auto w-full h-full mt-10">
          Modalı aç
        </button>
      )}

      {isOpen && (
        <div>
          <Modal onClose={closeModal}>
            <h1 className="pb-2 text-lg font-bold">Modal açık</h1>
            <button onClick={closeModal}>Kapat</button>
          </Modal>
        </div>
      )}
    </>
  );
}

function Modal({ children }) {
  // ref.showModal();
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.showModal();
  }, []);

  return (
    <dialog className="border-2 border-black p-4" ref={modalRef}>
      {children}
    </dialog>
  );
}
