import './modal.css'

const Modal = ({ children, handleClose, show, title }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            {/* <section className='modal-main'> */}
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    {/* <div className="modal-footer"> */}
                    {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                    {/* <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal" onClick={handleClose}>Close</button>
                    </div> */}
                </div>
            </div>


            {/* <button type="button" className='btn btn-primary btn-sm' onClick={handleClose}>Close</button> */}
            {/* </section> */}


        </div>
    )
}

export default Modal;