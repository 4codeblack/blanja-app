import React from 'react';
import Button from '../../base/Button';

const ModalSuccess = ({openModal}) => {
    return (
        <div className="modal-wrapper">
            <div className="modal-inner">
                <div className="text-center"><img src={require("../../../assets/icons/checklist_success.svg").default} width={150} height={150} alt="" /></div>
                <div className="text-center my-3">Success Saving Picture</div>
                <div className="text-center"><Button className="w-25 rounded-pill bg-danger text-white p-3" onClick={()=>openModal(false)}>Ok</Button></div>
            </div>
        </div>
    )
};

export default ModalSuccess;
