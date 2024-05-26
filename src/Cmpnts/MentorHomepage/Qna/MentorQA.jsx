import './MentorQA.css'

import React, { useState } from "react";

import QuestionAnswer from "./QuestionAnswer";

import { useRecoilState } from "recoil";
import { isEditState, mentorQAstate } from "../recoil";

export default function MentorQA() {
  const [mentorQA, setMentorQA] = useRecoilState(mentorQAstate);
  const [editedQuestions, setEditedQuestions] = useState([...mentorQA.map(qa => qa.question)]);
  const [editedAnswers, setEditedAnswers] = useState([...mentorQA.map(qa => qa.answer)]);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedMentorQA = mentorQA.map((qa, i) => ({
      question: editedQuestions[i],
      answer: editedAnswers[i]
    }));
    setMentorQA(updatedMentorQA);
    setIsEditing(false);
  };

  return (
    <div className="mentoring_qa_wrap">
        <div className="mtt_title"> 자주 묻는 질문</div>
      {isEditing ? (
        <div>
          {mentorQA.map((qa, i) => (
            <div key={i} className="mentor_qa_wrap">
              <input className="mentor_q_wrap" type="text" value={editedQuestions[i]}
                onChange={(e) => {
                  const newQuestions = [...editedQuestions];
                  newQuestions[i] = e.target.value;
                  setEditedQuestions(newQuestions);
                }}/>
              <input className="mentor_a_wrap" type="text" value={editedAnswers[i]}
                onChange={(e) => {
                  const newAnswers = [...editedAnswers];
                  newAnswers[i] = e.target.value;
                  setEditedAnswers(newAnswers);
                }}/>
            </div>
          ))}
          <div className="mentoring_qa_btn">  <button className="save_btn" onClick={handleSave}>저장하기</button></div>
        </div>
      ) : (
          <div>
              {mentorQA.map((qa, i) => (
        <QuestionAnswer
          key={i}
          question={qa.question}
          answer={qa.answer}
        />
      ))}
      <div className="mentoring_qa_btn"><button className="modify_btn" onClick={handleEdit}>수정하기</button> </div>
        </div>
      )}
    </div>
  );
}
