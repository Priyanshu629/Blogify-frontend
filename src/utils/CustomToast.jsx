

const CustomToast = ({ message, onAccept, onCancel }) => {
    return (
      <div>
        <p>{message}</p>
        <button onClick={onAccept}>Accept</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    );
  };

export default CustomToast
