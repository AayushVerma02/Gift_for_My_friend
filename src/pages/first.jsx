import React from "react";
const ProposalPage = ({setBook}) => {

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #f984b5, #f57b8f);
            font-family: "Comic Sans MS", cursive, sans-serif;
            color: #fff;
            text-align: center;
            flex-direction: column;
          }
          .heart {
            width: 120px;
            height: 120px;
            fill: #ff4d6d;
            animation: pulse 1.5s infinite ease-in-out;
            filter: drop-shadow(0 0 10px #ff759b);
          }
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              filter: drop-shadow(0 0 10px #ff759b);
            }
            50% {
              transform: scale(1.2);
              filter: drop-shadow(0 0 30px #ff759b);
            }
          }
          .shayari-text {
            font-size: 1.5em;
            font-weight: bold;
            color: #ffebd0;
            line-height: 1.5;
            opacity: 0;
            animation: fadeInText 1.5s forwards;
          }
          @keyframes fadeInText {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .word {
            opacity: 0;
            display: inline-block;
            animation: fadeInWord 1.5s forwards;
          }
          @keyframes fadeInWord {
            to { opacity: 1; }
          }
          .propose-btn {
            background-color: #ff4d6d;
            border: none;
            padding: 15px 30px;
            color: white;
            font-size: 1.2em;
            cursor: pointer;
            margin-top: 20px;
            border-radius: 25px;
            transition: background-color 0.3s ease;
          }
          .propose-btn:hover {
            background-color: #ffffff;
            color: #f2264b;
          }
        `}
      </style>

      <div className="heart-container">
        <svg
          className="heart"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>

        <div className="shayari-text">
          {["Hey", "my", "princess,"].map((word, i) => (
            <span
              key={i}
              className="word"
              style={{ animationDelay: `${0.5 * i}s` }}
            >
              {word} &nbsp;
            </span>
          ))}
          <br />
          {["I", "have", "so", "much", "to", "say,"].map((word, i) => (
            <span
              key={i + 3}
              className="word"
              style={{ animationDelay: `${1.5 + 0.5 * i}s` }}
            >
              {word} &nbsp;
            </span>
          ))}
          <br />
          {["but", "words", "fail", "to", "express", "it", "all."].map(
            (word, i) => (
              <span
                key={i + 9}
                className="word"
                style={{ animationDelay: `${3 + 0.5 * i}s` }}
              >
                {word} &nbsp;
              </span>
            )
          )}
        </div>

        <button
          className="propose-btn"
          onClick={() => setBook(true)}
        >
          Click: So This is For You ❤
        </button>
      </div>
    </div>
  );
};

export default ProposalPage;
