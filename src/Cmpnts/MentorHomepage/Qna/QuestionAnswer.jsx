import './QuestionAnswer.css'

export default function QuestionAnswer({ question, answer, onEdit }) {
  return (
    <div className="mentor_qa_wrap">
      <div className="mentor_q_wrap">
        <span className="question">Q</span>
        <span className="question_contnet">{question}</span>
      </div>
      <div className="mentor_a_wrap">
        <span className="answer">A</span>
        <span className="answer_content">{answer}</span>
      </div>
    </div>
  );
}
