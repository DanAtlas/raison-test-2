import styles from './Popup.module.css';
import { PopupProps } from './Popup.types';

const Popup = ({ isSuccess, isOpen, setState }: PopupProps) => {
  const handleClosePopup = () => {
    setState(false);
  }

  return (
    <div className={[styles['popup'], styles[isOpen ? 'popup--is-open' : '']].join(' ')}>
      <div className={styles['popup-wrapper']}>
        {isSuccess ? (
            <p className="text-green-700 font-bold text-2xl text-center">Success!</p>
          ) : (
            <p className="text-red-700 font-bold text-2xl text-center">Error!</p>
          )
        }
        <button onClick={handleClosePopup} className="btn btn-primary mt-10">Назад</button>
      </div>
    </div>
  )
}

export default Popup;