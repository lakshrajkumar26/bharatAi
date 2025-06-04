



import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Typewriter } from 'react-simple-typewriter';
import './Aichat.css';

const Aichat = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);    // Stores all Q&A
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null);
  const bottomRef = useRef(null);

  const handleOnchange = (e) => {
    setQuestion(e.target.value);
  };

  const autoResize = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    autoResize();
  }, [question]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getData = async () => {
    if (!question.trim()) return;
    setLoading(true);

    // Add user question to chat
    setMessages((prev) => [...prev, { type: 'user', text: question }]);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_APP_ID}`,
        method: 'post',
        data: {
          contents: [{ parts: [{ text: question }] }]
        }
      });

      const answer = response.data.candidates[0].content.parts[0].text;

      // Add AI response to chat
      setMessages((prev) => [...prev, { type: 'ai', text: answer }]);
    } catch (err) {
      setMessages((prev) => [...prev, { type: 'ai', text: 'Error fetching response.' }]);
      console.error(err);
    }

    setQuestion('');
    setLoading(false);
  };

  return (
    <div className="main">
      <h1>Bharat AI</h1>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.type === 'ai' ? (
              <Typewriter
                words={[msg.text]}
                loop={1}
                cursor
                cursorStyle=""
                typeSpeed={10}
                deleteSpeed={20}
                delaySpeed={300}
              />
            ) : (
              <strong>You:</strong>
            )}
            {msg.type === 'user' && <span> {msg.text}</span>}
          </div>
        ))}

        {loading && <div className="message ai">Typing...</div>}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input">
        <textarea
          value={question}
          onChange={handleOnchange}
          onInput={autoResize}
          placeholder="Type your question..."
          ref={textareaRef}
          
          
        />
        <button onClick={getData}>Send</button>
      </div>
    </div>
  );
};

export default Aichat;




























/* BASE CODE --> */

// import React, { useRef } from 'react'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import './Aichat.css'
// import { Typewriter } from 'react-simple-typewriter'



// const Aichat = () => {

//       const [question ,setQuestion] = useState("");
//        const [data,setData]= useState("");

//         const textareaRef = useRef(null);


//         const autoResize = () => {
//     const el = textareaRef.current;
//     if (el) {
//       el.style.height = "auto"; // reset height
//       el.style.height = el.scrollHeight + "px"; // set new height
//     }
//   };

//   useEffect(() => {
//     autoResize(); // trigger resize on initial load or content set
//   }, [question]);
 
//     const getData = async () => {
//   console.log("loading")

//   const response = await axios ({
//     url : "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDvcP5bQVHup9yc6XfY3zh274onhTQqIH8",
//     method :"post",
//     data : {
//     "contents": [
//       {
//         "parts": [
//           {
//             "text": question
//           }
//         ]
//       }
//     ]
//   }
//   })

//   //both ways to access 
//   const answer = response.data.candidates[0].content.parts[0].text
//   // const text = response["data"]['candidates'][0]["content"]["parts"][0]["text"]
//   setData(answer)
// }


//  const  handleOnchange = (e) => {
//   setQuestion(e.target.value);
// }
// useEffect( () => {
// console.log("updated question " ,question)
// },[question])






//   return (
//      <>
//       <div className="main">
//         <h1>AI Search</h1>

//        <div className="chat-body">
//         <div className="answer">
//           <pre>
//             Answer:{" "}
//             {data ? (
//               <Typewriter
//                 words={[data]}
//                 loop={1}
//                 cursor
//                 cursorStyle="_"
//                 typeSpeed={70}
//                 deleteSpeed={50}
//                 delaySpeed={1000}
//               />
//             ) : (
//               <span>Ask something...</span>
//             )}
//           </pre>
//         </div>
//       </div>
        
//    <div className="chat-input">
//     <textarea
//         value={question}
//         onChange={ (e) => handleOnchange(e) }
//         onInput={autoResize}
//         placeholder="Type your question..."
//         ref={textareaRef}
//     />
//         <button onClick={ () => getData()}>Get Answer</button>
         
//     </div>
//       </div>
//     </>
//   )
// }

// export default Aichat