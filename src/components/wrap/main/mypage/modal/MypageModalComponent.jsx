import React from 'react';
import './scss/mypagemodal.scss';

export default function MypageModalComponent({modalClose, onClickSave, onChangeImg, image, setImage}) {

    const onClickReset =()=>{
        setImage('')
    }
    return (
        <div id='mypageModal'>            
            <div className="modal-container">
                <div className="modal-gap">
                    <div className="modal-title">
                        <h1>나의 프로필 관리</h1>
                        <button onClick={modalClose}></button>
                    </div>
                    <div className="modal-content">
                        <div className="content-gap">
                            <span>{image && <img src={image} alt="" />}</span>
                            <h3>회원님을 알릴 수 있는 사진을 등록해주세요.</h3>
                            <h4>파일형식은 jpg, jpeg, png 파일용량은 3MB이하만 가능합니다.</h4>
                            <button onClick={onClickReset}>기본 이미지로 변경</button>
                            <label htmlFor="uploadBtn">
                                사진변경
                                <input type="file" id='uploadBtn' accept="image/*" onChange={onChangeImg}/>
                            </label>
                            
                        </div>                        
                    </div>
                    <div className="modal-bottom">
                        <button onClick={onClickSave}>저장</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

