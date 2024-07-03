import style from './modal.module.css';
import { useState } from 'react';

const Modal = (props) => {

    const closeModal = () => {
        props.setModalOpen(false);
    }
    
    const listGithub = props.portfolioLi[props.idxProp].github;

    return (
        <div  className={`pageArea ${style.modal}`} >
            <div className={style.modalInner}>
                <div className={style.close} >
                    <img src="/close_icon.png" alt="닫기" onClick={closeModal} />
                </div>
                <div className={style.contenWrap}>
                    <div className={style.leftInner}>
                        <img src={'/project_img_'+ (props.idxProp + 1) +'.png'} />
                    </div>
                    <div className={style.rightInner}>
                        <h3>{props.portfolioLi[props.idxProp].title}</h3>
                        <h4>{props.portfolioLi[props.idxProp].skill}</h4>
                        <a className={style.linkTxt} href={props.portfolioLi[props.idxProp].link} target="_blank" >{props.portfolioLi[props.idxProp].link}</a>
                        {listGithub ? 
                        <div className={style.githubBox}>
                            <img src="/github2.png"/>
                            <a href={listGithub} target="_blank" >{listGithub}</a>
                        </div> 
                        : ''}
                        <p>{props.portfolioLi[props.idxProp].content}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Modal;