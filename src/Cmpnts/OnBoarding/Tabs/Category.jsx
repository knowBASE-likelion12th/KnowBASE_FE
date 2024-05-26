import Input from "../Model/Input";

import { useRecoilState } from "recoil";
import { infoState, availableTimeState, idState, strengthState } from "../recoil";
import { useEffect } from "react";
import Choices from "../Model/Choices";

function Category(){
    return(
        <>
        <Choices title={'멘토링 할 주거 형태를 선택해주세요 '} choices={['단독주택', '아파트', '오피스텔', '빌라', '원룸']}/>

        <Choices title={'멘토링 할 공간유형을 선택해주세요'} choices={['주거공간', '사무공간', '상업공간']} />
        
        <Choices title={'멘토링 할 스타일을 선택해 주세요.'} choices={['맥시멀', '미니멀', '모던', '클래식', '내추럴', '사이버', '믹스앤매치']} />

        <Choices title={'멘토님의 관심사를 선택해 주세요.'} choices={['스포츠', '음악', '음악/미술' ,'게임', '사진', '패션', 'DIY', '요리', '홈텐딩', '홈카페', '홈시어터', '문화']}/>
        </>
    )
}

export default Category;