import './ChaneWord.css'
import  { useEffect } from 'react';
export default function ChangeWord() {
    useEffect(() => {
        let words = document.querySelectorAll(".word");
        words.forEach((word) => {
            let letters = word.textContent.split(/\/s+/);
            word.textContent = "";
            letters.forEach((letter) => {
                let span = document.createElement("span");
                span.textContent = letter;
                span.className = "letter";
                word.append(span);
            });
        });
    
        let currentWordIndex = 0;
        let maxWordIndex = words.length - 1;
        words[currentWordIndex].style.opacity = "1";
    
        let changeText = () => {
            let currentWord = words[currentWordIndex];
            let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
        
            Array.from(currentWord.children).forEach((letter, i) => {
                setTimeout(() => {
                letter.className = "letter out";
                }, i * 80);
            });
            nextWord.style.opacity = "1";
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = "letter behind";
                setTimeout(() => {
                letter.className = "letter in";
                }, 340 + i * 80);
            });
            currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
            };
    
        changeText();
        const interval = setInterval(changeText, 3000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
        }, []);
    return (
    <>
    <div className="change-text">
        <h4 className=" font-bold ">
            نتميز ب
        </h4>
        <h4 className="">
            <span className="word">قائمة متنوعة من المأكولات</span>
            <span className="word">قائمة خاصة بالنباتيين</span>
            <span className="word">تجربة تناول مميزة</span>
            <span className="word">خدمة توصيل</span> 
            <span className="word">الاهتمام بالجودة</span> 
            <span className="word">تجربة طعام متكاملة</span> 
            <span className="word">التركيز على المكونات المحلية</span> 
        </h4>
    </div>
    </>
    )
}
