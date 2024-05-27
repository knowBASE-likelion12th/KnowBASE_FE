import './MentorQA.css';

import React from "react";

import { useRecoilState } from "recoil";
import { q1State, q2State, q3State, q4State, a1State, a2State, a3State, a4State, isRoadmapEditClickedState } from '../mc_recoil';

export default function MentorQA() {
  const [isRoadmapEditClicked, setIsRoadmapEditClicked] = useRecoilState(isRoadmapEditClickedState);
  const [q1, setQ1] = useRecoilState(q1State);
  const [q2, setQ2] = useRecoilState(q2State);
  const [q3, setQ3] = useRecoilState(q3State);
  const [q4, setQ4] = useRecoilState(q4State);
  const [a1, setA1] = useRecoilState(a1State);
  const [a2, setA2] = useRecoilState(a2State);
  const [a3, setA3] = useRecoilState(a3State);
  const [a4, setA4] = useRecoilState(a4State);

  const qList = [q1, q2, q3, q4];
  const qSetList = [setQ1, setQ2, setQ3, setQ4];
  const aList = [a1, a2, a3, a4];
  const aSetList = [setA1, setA2, setA3, setA4];

  function editBtnHandler() {
    setIsRoadmapEditClicked(true);
  }

  function saveBtnHandler() {
    setIsRoadmapEditClicked(false);
  }

  return (
    <div className='qa_wrap'>
      <div className='mtt_title'>자주 묻는 질문</div>
      {qList.map((question, i) => (
        <div className='qa_qna-wrap' key={i}>
          <div className={isRoadmapEditClicked ? 'qa_q-wrap-edit' : 'qa_q-wrap'}>
            <div className='qa_q-mark'>Q{i + 1}</div>
            <input 
              type='text' 
              value={question} 
              placeholder={question} 
              onChange={(event) => qSetList[i](event.target.value)} 
              readOnly={!isRoadmapEditClicked} 
            />
          </div>
          <div className={isRoadmapEditClicked ? 'qa_a-wrap-edit' : 'qa_a-wrap'}>
            <div className='qa_a-mark'>A{i + 1}</div>
            <textarea 
              type='text' 
              value={aList[i]} 
              placeholder={aList[i]} 
              onChange={(event) => aSetList[i](event.target.value)} 
              readOnly={!isRoadmapEditClicked}
            />
          </div>
        </div>
      ))}

      <div className='mentorIntro_btn_container'>
        <div className='mentorIntro_btn_wrap'>
          {isRoadmapEditClicked ? (
            <button className='save_btn' onClick={saveBtnHandler}>저장하기</button>
          ) : (
            <button className='modify_btn' onClick={editBtnHandler}>수정하기</button>
          )}
        </div>
      </div>
    </div>
  );
}
