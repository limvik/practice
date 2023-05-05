import React, {useState} from 'react';

function ConfirmButtonF (props) {
    const [isConfirmed, setConfirmed] = useState(false);

    const handleConfirm = () => {
        setConfirmed((prevIsConfiremd) => !prevIsConfiremd);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "Confirmed!" : "Confirm"}
        </button>
    );
}

export default ConfirmButtonF;