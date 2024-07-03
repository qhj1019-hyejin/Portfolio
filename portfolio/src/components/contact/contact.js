import style from './Contact.module.css';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Contact = (props) => {

    const { register,  handleSubmit, formState: { isSubmitting, isDirty, errors } } = useForm();

    const form = useRef();

    // 전송 후 text 
    const sendEmail = (e) => {
    //   e.preventDefault();
  
    emailjs.sendForm('service_2rb868j', 'template_l8odtoi', form.current, 'AxBNdASCBrusPDrKr')
        .then((result) => {
            alert('전송 되었습니다.');
        }, (error) => {
            alert('전송에 실패했습니다.');
            console.log(error.text);
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5,
            }}
            className={`pageArea ${style.contact}` }
        >
            <div className="inner">
                <h2 className="tlt">Get in Touch</h2>
                <ul className={style.aboutBox}>
                    <li>
                        <a href="https://goo.gl/maps/PdbzQkf3Y1yosvUBA" target={"_blank"}>
                        <img src="/map_icon.png" alt="map icon"/>
                        <h3>gimpo, Republic of Korea</h3>
                        </a>
                    </li>
                    <li>
                        <a href="tel:010-3152-3026">
                            <img src="/phone_icon2.png" alt="phone icon"/>
                            <h2>010 3152 3026</h2>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:qhj1019@naver.com">
                            <img src="/mail_icon.png" alt="mail icon"/>
                            <h2>qhj1019@naver.com</h2>
                        </a>
                    </li>
                </ul>
                <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                    <small role="alert" className="errToast">{errors.name?.message || errors.phone?.message || errors.email?.message || errors.message?.message }</small>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name" 
                        {...register("name", { required: "이름 필수 입력값 입니다." })}
                    />
                    <input 
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        {...register("phone", { required: "번호 필수 입력값 입니다." })}
                    />
                    <input 
                        type="email"
                        name="email"
                        className={style.fullInput}
                        placeholder="Email"
                        aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
                        {...register("email", {
                            required: "이메일은 필수 입력값 입니다.",
                            pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "이메일 형식에 맞지 않습니다.",
                        },
                        })}
                    />
                    <textarea 
                        name="message"
                        className={style.fullInput}
                        placeholder="Message"
                        {...register("message", {
                            required: "내용을 입력해주세요.",
                            minLength: {
                                message: "5글자 이상 입력하세요.",
                                value: 5,
                            },
                        })}
                    />
                    <input type="submit" className="pinkBtn" value="Send" disabled={isSubmitting} />
                </form>
            </div>
        </motion.div>
    )
}
export default Contact;