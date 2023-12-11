'use client'
import React, { useState } from "react";
import Sintax from "@/SyntaxCode/SyntaxCode";
import styles from "./page.module.css";
import { AboutJs, AboutC } from "@/SyntaxCode/Code"

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const toggleLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className={`relative h-[400px] w-[900px] bg-[#2f2e2e] text-white rounded-3xl p-[20px] text-xl overflow-y-auto ${styles.container}`}>
      <div className="relative overflow-y-auto">
        <div className="mb-4 absolute top-0 right-0 p-[20px]">
          <button
            className={`mr-2 ${selectedLanguage === 'javascript' ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => toggleLanguage('javascript')}
          >
            JS
          </button>
          <button
            className={`mr-2 ${selectedLanguage === 'c++' ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => toggleLanguage('c++')}
          >
            C++
          </button>
        </div>
        {selectedLanguage === 'javascript' && <Sintax code={AboutJs} language="javascript" />}
        {selectedLanguage === 'c++' && <Sintax code={AboutC} language="c++" />}

      </div>

      <div className="flex p-[20px] justify-between items-center">
        <div className="count">
         <p>Aqui va un contador</p>
        </div>
        <div className="textcontainer">
          <p>Aqui va un texto</p>
        </div>
        
      </div>

    </div>
  );
}
