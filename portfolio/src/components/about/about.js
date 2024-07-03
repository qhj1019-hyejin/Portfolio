import { useState,useEffect } from "react";
import style from './About.module.css';
import { motion } from "framer-motion";

const About = (props) => {

    /* rightBox skills 리스트 */
    const [skill, setSkill] = useState([
        { name: 'HTML' , pct : '100' },
        { name: 'CSS' , pct : '100' },
        { name: 'JavaScript' , pct : '95' },
        { name: 'jQuery' , pct : '100' },
        { name: 'React' , pct : '80' },
        { name: 'Java' , pct : '30' },
        { name: 'Node.js' , pct : '40' },
        { name: 'PHP' , pct : '95' },
        { name: 'MySQL' , pct : '90' },
        { name: 'MSSQL' , pct : '70' },
        
    ])

    const skillList = skill.map(e => (
        <li key={e.name}>
            <div className={style.skillTxt}>
                <span>{e.name}</span>
                <span>{e.pct}%</span>
            </div>
            <progress value={e.pct} max="100" />
        </li>
    ))

    return (
        <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5,
            }}
            className={`pageArea ${style.aboutWrap}`}
        >
            <div className={style.leftBox}>
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotateZ: 360 }}
                    transition={{
                        duration: 0.9,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className={style.aboutImg} 
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/about-img.jpg'})` }}
                />
                <ul className={style.aboutList}>
                    <li>
                        <img src="/name_icon.png" alt="name icon"/>
                        <h2>박혜진</h2>
                    </li>
                    <li>
                        <img src="/phone_icon.png" alt="phone icon"/>
                        <h2><a href="tel:010-3152-3026">010 3152 3026</a></h2>
                    </li>
                    <li>
                        <img src="/github2.png" style={{filter: 'brightness(0.3)'}} alt="github icon"/>
                        <h2><a href="https://github.com/qhj1019-hyejin" target={"_blank"}>github.com/qhj1019-hyejin</a></h2>
                    </li>
                    <li>
                        <img src="/mail_icon.png" style={{filter: 'contrast(0.6)'}} alt="mail icon"/>
                        <h2><a href="mailto:qhj1019@naver.com">qhj1019@naver.com</a></h2>
                    </li>
                </ul>
            </div>
            <div className={style.rightBox}>
                <h3 className="tlt">Skills</h3>
                <ul>
                    {skillList}
                </ul>
            </div>
            <div className={style.aboutTxt}>
                3년간 프론트 개발 경험을 통해 웹 페이지 디자인과 기능 구현에 큰 성취감과 재미를 느꼈습니다.
                업무를 수행하면서 SQL을 다루고 데이터 통신하는 작업들을 접하게 되면서 직접 데이터와 로직을 다루는 백엔드 개발에 대한 깊은 관심과 도전 의지를 키웠습니다.<br/>
                <br/>
                저는 강한 의지력과 꾸준한 노력으로 새로운 기술을 습득하고 성장하는 능력을 갖추고 있습니다. 
                <b> 새로운 기술에 대한 열정과 적극적인 학습 태도를 가지고 있으며, 빠르게 성장하여 팀에 기여할 수 있는 백엔드 개발자가 될 수 있다고 자신 합니다.</b>
            </div>
        </motion.div>
    )
}

export default About;