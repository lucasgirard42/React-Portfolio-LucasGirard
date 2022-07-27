//Blogpost and origin
//https://webanimation.blog/blog/wavy-text-animation-using-react-hooks-with-gsap-v3/
import React, { useEffect, useRef } from "react";
import "./TitreDevWeb.css";
import styled from "@emotion/styled";
import gsap from "gsap";


const TextStyled = styled.h1`
  font-size: calc(32px + (64 - 32) * ((100vw - 320px) / (1600 - 320)));
  font-weight: 500;
  margin: 0;
  color: white;
  position: absolute;
`;




export default function Test() {
  const wavyTextRef = useRef(null);
  function SplitTextToChars(textNode) {
    const textContent = textNode.textContent;
    const textSplit = textContent.split("");
  
    const frag = document.createDocumentFragment();
    textSplit.forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style = `${letter === " " ? "min-width: 1rem;" : ""}z-index: ${
        textSplit.length - i
      }; position: relative; display: inline-block;`;
      frag.appendChild(span);
    });
    textNode.textContent = "";
    textNode.appendChild(frag);
  
    return textNode.children;
  }
  


  useEffect(() => {
    if (!wavyTextRef.current) return;
    const chars = SplitTextToChars(wavyTextRef.current);

    gsap.set(wavyTextRef.current, { perspective: 400 });

    gsap.from(
      chars,
      {
        duration: 0.5,
        opacity: 0,
        scale: 1,
        delay: 0.5,
        
        rotationX: -90,
        transformOrigin: "0% 50% -50",
        ease: "inOut",
        stagger: 0.025
      },
      "+=0"
    );
  }, []);

  return (
    <div className="test">
      <TextStyled className="test2" ref={wavyTextRef}>développeur web et mobile </TextStyled>
    </div>
  );
}



