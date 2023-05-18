import ReactDOM from 'react-dom';

// This is a general reusable Modal Overlay. This uses normal css and uses props to create a dynamic modal.
// This is the reason why we have not included tailwind classes here.
const ModalOverlay = () => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault} action="">
                <div className={`modal__content ${contentClass}`}>{props.children}</div>
            </form>
            <footer className={`modal__footer ${props.footerClass}`}>
                {props.footer}
            </footer>
        </div>
    )
    return ReactDOM.createPortal(content, document.getElementById('modal-root'));
}

const Modal = props => {
    return (
        <div>
            Modal
        </div>
    )
}

export default Modal;