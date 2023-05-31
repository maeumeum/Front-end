import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './modal.css';
import exit from '../../assets/icons/exit.svg';
import { BtnConatiner } from './style';

import LargeButton from '../Buttons/LargeButton';
import TopBar from '../../components/TopBar/TopBar';

type ModalProps = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

const Modal = ({ isOpen, setOpen }: ModalProps) => {
  // useEffect(() => {
  //   window.addEventListener('click', handleClickClose);
  //   return () => {
  //     window.removeEventListener('click', handleClickClose);
  //   };
  // }, []);

  const [input, setInput] = useState('');

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    console.log(value);
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [
          {
            color: [
              '#000000',
              '#e60000',
              '#ff9900',
              '#ffff00',
              '#008a00',
              '#0066cc',
              '#9933ff',
              '#ffffff',
              '#facccc',
              '#ffebcc',
              '#ffffcc',
              '#cce8cc',
              '#cce0f5',
              '#ebd6ff',
              '#bbbbbb',
              '#f06666',
              '#ffc266',
              '#ffff66',
              '#66b966',
              '#66a3e0',
              '#c285ff',
              '#888888',
              '#a10000',
              '#b26b00',
              '#b2b200',
              '#006100',
              '#0047b2',
              '#6b24b2',
              '#444444',
              '#5c0000',
              '#663d00',
              '#666600',
              '#003700',
              '#002966',
              '#3d1466',
              'custom-color',
            ],
          },
          { background: [] },
        ],
        ['image'],
        ['clean'],
      ],
    },
  };
  return (
    <ReactModal isOpen={isOpen} onRequestClose={handleClickClose}>
      <TopBar
        modal="modal"
        title={'봉사활동 리뷰작성'}
        text={'다른 사람들과 함께 봉사의 즐거움을 나눠보아요!'}
      />
      <ReactQuill onChange={handleChange} modules={modules} />

      <BtnConatiner>
        <LargeButton onClick={handleClickClose}>후기 작성하기</LargeButton>
      </BtnConatiner>
    </ReactModal>
  );
};
export default Modal;
