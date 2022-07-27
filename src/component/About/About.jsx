import React from 'react';
import Divider from '../Divider/Divider';
import './About.css';




function About() {
    return (
        <div className='about'>
            <h2> PRÉSENTATION</h2>
            <Divider />
            <div class="presentation">
                <div className='presentationGrid1'>
                    <p >Lucas Girard, 33 ans, diplômé à titre professionnel Développeur Web et Web Mobile et Concepteur développeur d'application. Formé durant 20 mois à Simplon Roanne.<br /><br />
                        <span className="text-uppercase">Langage de prédilection : </span>PHP<br />
                        <span className="text-uppercase">Framework utilisés : </span>Symfony, REACT<br />
                        <span className="text-uppercase">Langage et framework complémentaires : </span>HTML, CSS, JavaScript, REACT NATIVE, WordPress.<br /><br />
                    </p><br />
                </div >
                <div className="presentationGrid2 skill anime ">
                    <h6 className="skill-name">HTML/CSS/JS</h6>
                    <div className="skill-bar">
                        <div className="skill-active HtmlCssJs " style={{width: '100%'}}  >
                        </div>
                    </div>

                    <h6 className="skill-name pt-3">SYMFONY</h6>
                    <div className="skill-bar">
                        <div className="skill-active HtmlCssJs" style={{width: ' 90%'}}  >
                        </div>
                    </div>

                    <h6 className="skill-name pt-3">REACT</h6>
                    <div className="skill-bar">
                        <div className="skill-active HtmlCssJs" style={{width: ' 85%'}} >
                        </div>
                    </div>

                    <h6 className="skill-name pt-3">REACT NATIVE</h6>
                    <div className="skill-bar">
                        <div className="skill-active HtmlCssJs" style={{width: ' 85%'}} >
                        </div>
                    </div>

                    <h6 className="skill-name pt-3">BOOTSTRAP</h6>
                    <div className="skill-bar">
                        <div className="skill-active HtmlCssJs" style={{width: ' 100%'}}>
                        </div>
                    </div>

                    <h6 className="skill-name pt-3">PHP/MYSQL</h6>
                    <div className="skill-bar">
                        <div className="skill-active HtmlCssJs" style={{width: ' 100%'}}>
                        </div>
                    </div>

                    <h6 className="skill-name pt-3">WORDPRESS</h6>
                    <div className="skill-bar">
                        <div className="skill-active HtmlCssJs" style={{width: ' 100%'}} >
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}


export default About;