import React from "react";

const FAQPage = () => {
  const faqData = [
    {
      question: "Question 1",
      answer: "Answer to question 1.",
    },
    {
      question: "Question 2",
      answer: "Answer to question 2.",
    },
    {
      question: "Question 3",
      answer: "Answer to question 3.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>

      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
