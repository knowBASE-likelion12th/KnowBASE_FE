import Layout from "./Model/Layout";
import Category from './Tabs/Category'
import Roadmap from './Tabs/Roadmap'
import Intro from './Tabs/Intro'
import Finish from './Tabs/Finish'

import { useRecoilState } from "recoil";
import { crntCategoryIdxState } from "./recoil";

function OnBoarding(){
    const [crntCategoryIdx, setCrntCategoryIdx] = useRecoilState(crntCategoryIdxState)

    function renderContent() {
        switch (crntCategoryIdx) {
            case 0:
                return <Category />;
            case 1:
                return <Intro />;
            case 2:
                return <Roadmap />;
            case 3:
                return <Finish />;
            default:
                return null;
        }
    }
    return(
        <Layout element={renderContent()} />
    )
    
}
export default OnBoarding;