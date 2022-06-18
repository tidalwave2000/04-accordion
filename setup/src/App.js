import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
	const [questions, setQuestions] = useState(data);

	return (
		<main>
			{/* create container for each question */}
			<div className="container">
				<h3>questions and answers about login</h3>
				<section className="info">
					{/* traverse the array and extract the data per id */}
					{questions.map((question) => {
						return (
							<SingleQuestion key={question.id} {...question}>
								{" "}
							</SingleQuestion>
						);
					})}
				</section>
			</div>
		</main>
	);
}

export default App;
