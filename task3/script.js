{"What is your marital status?": ["Single", "Married"]}
{"Are you planning on getting married next year?": ["Yes", "No"]}
{"How long have you been married?": ["Less than a year", "More than a year"]}
{"Have you celebrated your one year anniversary?": ["Yes", "No"]}

const questions = [
   {
      id: "q1",
      question: "What is your marital status?"
   },
   {
      id: "q2",
      question: "Are you planning on getting married next year?"
   },
   {
      id: "q3",
      question: "How long have you been married?"
   },
   {
      id: "q4",
      question: "Have you celebrated your one year anniversary?"
   },
];

const answers = [
   {
      id: "a1",
      answer: "Single"
   },
   {
      id: "a2",
      answer: "Married"
   },
   {
      id: "a3",
      answer: "Yes"
   },
   {
      id: "a4",
      answer: "No"
   },
   {
      id: "a5",
      answer: "Less than a year"
   },
   {
      id: "a6",
      answer: "More than a year"
   },
];
const questionAswers = [
	{
		id: "qa1",
		questionId: "q1",
		answerIds: ["a1", "a2"]
	},
	{
		id: "qa2",
		questionId: "q2",
		answerIds: ["a3", "a4"]
	},
	{
		id: "qa3",
		questionId: "q3",
		answerIds: ["a5", "a6"]
	},
	{
		id: "qa4",
		questionId: "q4",
		answerIds: ["a3", "a4"]
	}
];

const nextQuestions = [
	{
		id: "nq1",
		questionAswerId: "qa1",
		answers: [
			{
				answerId: "a1",
				questionAswer: "qa2"
			},
			{
				answerId: "a2",
				questionAswer: "qa2"
			}
		]
	},
	{
		id: "nq2",
		questionAswerId: "qa2",
		answers: [
			{
				answerId: "a3",
				questionAswer: "qa4"
			},
			{
				answerId: "a4",
				questionAswer: "qa3"
			}
		]
	},
   {
      id: "nq3",
      questionAswerId: "qa3",
      answers: [
			{
				answerId: "a5",
				questionAswer: "qa4"
			},
			{
				answerId: "a6",
				questionAswer: "qa3"
			}
		]

   },
];

