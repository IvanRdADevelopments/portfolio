import ReactDOM from 'react-dom';

export default function LanguageModal({ isOpen, onClose, handleDownload }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Elige tu idioma</h2>
        <button className="modal-btn" onClick={() => handleDownload('es')}>Español</button>
        <button className="modal-btn" onClick={() => handleDownload('en')}>Inglés</button>
        <button className="modal-btn" onClick={onClose}>Cancelar</button>
      </div>
    </div>,
    document.body
  );
}
