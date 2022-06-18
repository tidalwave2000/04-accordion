import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)} >
          {/* check to see if the icon is a plus or minus then change it */}
          {/* upon clicking on the icon toggle the info on or off */}
          { showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* show answer if showInfo is true  */}
			{showInfo && <p>{info}</p>}
		</article>
	);
};

export default Question;
