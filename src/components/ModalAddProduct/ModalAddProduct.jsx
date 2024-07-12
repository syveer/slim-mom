import { ModalStyled } from './ModalAddProduct.styled';
import { ReactComponent as BackArrow } from 'images/backarrow.svg';
import { createPortal } from 'react-dom';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddProductModalOpened } from '../../redux/ModalAddProductOpened/selectors';
import { setProductModalOpened } from '../../redux/ModalAddProductOpened/slice';
import { DiaryForm } from 'components/DiaryForm/DiaryForm';

const modalRoot = document.querySelector('#modal-root');

const ModalAddProduct = () => {
  const dispatch = useDispatch();
  const modalOpened = useSelector(selectAddProductModalOpened);
  const [isMobile, setIsMobile] = useState(false);

  const closeModal = useCallback(() => {
    dispatch(setProductModalOpened(false));
  }, [dispatch]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCloseModal = (e) => {
    if (e.type === 'click' && e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <ModalStyled
      onClick={handleCloseModal}
      className={!modalOpened || !isMobile ? 'is-hidden' : ''}
    >
      <div className="modal">
        <div className="inner">
          <button type="button" className="close" onClick={closeModal}>
            <BackArrow className="return__icon" />
          </button>
          <div>
            <DiaryForm type="mobile" />
          </div>
        </div>
      </div>
    </ModalStyled>,
    modalRoot
  );
};

export default ModalAddProduct;
