'use client'
import {
  SiJavascript,
  SiCplusplus
} from "react-icons/si";
import React, { useState } from "react";
import Syntax from "@/SyntaxCode/SyntaxCode";
import styles from "./page.module.css";
import { AboutJs, AboutC } from "@/SyntaxCode/Code"

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const toggleLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className={`relative h-[400px] w-[900px] bg-[#2f2e2e] text-white rounded-3xl p-[20px] text-xl ${styles.container}`}>
      <div className=" flex gap-2 mb-4 absolute top-0 right-0 p-[40px] z-10">

        <SiJavascript className={`text-5xl cursor-pointer ${selectedLanguage === 'javascript' ? 'text-yellow-500' : 'text-gray-500'}`}
          onClick={() => toggleLanguage('javascript')} />

        <SiCplusplus className={`text-5xl cursor-pointer ${selectedLanguage === 'c++' ? 'text-blue-500' : 'text-gray-500'}`}
          onClick={() => toggleLanguage('c++')} />

      </div>
      <div className={`relative overflow-y-auto scroll-smooth ${styles.Syntax}`}>
        {selectedLanguage === 'javascript' && <Syntax code={AboutJs} language="javascript" />}
        {selectedLanguage === 'c++' && <Syntax code={AboutC} language="c++" />}
      </div>

      <div className="flex p-[20px] justify-between items-center">
        <div className="">
          <p>otra frase</p>
        </div>
        <div className="textcontainer">
          <p>Aqui va un texto</p>
        </div>

      </div>

    </div>
  );
}
