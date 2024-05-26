import { atom } from 'recoil'
import testImg from './assets/testImg.png'// dummy img
import { recoilPersist } from 'recoil-persist'


const { persistAtom } = recoilPersist(); //localStorage에 저장되며, key 이름은 'recoil-persist'로 저장됨

//더미 데이터 (추후 fetching한 json 데이터 매핑 필요)
export const mentorInfoState = atom({
    key: 'mentorInfoState',
    default:[
        {
            img: testImg,
            name: '홍길동',
            profilePic: testImg,
            score: 5,
            count: 10,
            content: 'dummydummydummydummydummydummy',
            tag1: 'oo전문',
            tag2: '키워드',
            tag3: '앤티크',
        },
        {
            img: testImg,
            name: '홍길동',
            profilePic: testImg,
            score: 5,
            count: 10,
            content: 'dummydummydummydummydummydummy',
            tag1: 'oo전문',
            tag2: '키워드',
            tag3: '앤티크',
        },
        {
            img: testImg,
            name: '홍길동',
            profilePic: testImg,
            score: 5,
            count: 10,
            content: 'dummydummydummydummydummydummy',
            tag1: 'oo전문',
            tag2: '키워드',
            tag3: '앤티크',
        },
        {
            img: testImg,
            name: '홍길동',
            profilePic: testImg,
            score: 5,
            count: 10,
            content: 'dummydummydummydummydummydummy',
            tag1: 'oo전문',
            tag2: '키워드',
            tag3: '앤티크',
        },
        {
            img: testImg,
            name: '홍길동',
            profilePic: testImg,
            score: 5,
            count: 10,
            content: 'dummydummydummydummydummydummy',
            tag1: 'oo전문',
            tag2: '키워드',
            tag3: '앤티크',
        },
        {
            img: testImg,
            name: '홍길동',
            profilePic: testImg,
            score: 5,
            count: 10,
            content: 'dummydummydummydummydummydummy',
            tag1: 'oo전문',
            tag2: '키워드',
            tag3: '앤티크',
        }
    ]
})

export const crntMentorIdxState = atom({
  key: 'crntMentorIdxState',
  default: -1
})

export const selectedNavbarState = atom({
    key:'selectedNavBarState',
    default:''
})
 
export const inputNickNameState = atom({
    key:'inputNickName',
    default:''
})
export const inputIdState = atom({
    key: 'inputIdState',
    default: ''
})

export const inputPasswordState = atom({
    key: 'inputPasswordState',
    default: ''
})

export const inputPasswordConfirmedState = atom({
    key: 'inputPasswordConfirmedState',
    default: ''
})

export const inputNameState = atom({
    key:'inputNameState',
    default:''   
})
export const inputMWState = atom({
    key:'inputMWState',
    default:''
})
export const inputAgeState = atom({
    key:'inputAgeState',
    default:''
})
export const inputCertificateState = atom({
    key:'inputCertificateState',
    default: ''
})

export const mentorIntroState = atom({
    key: 'mentorIntroState',
    default:[
        {
            title: '나는 누구인가요?',
            content: '영화보는걸 좋아하는 5년차 작곡가입니다 뭐 사용자의 자유에 의해 내용은 더 길어질수도있습니다 제가 더이상 쓸만한 내용이 없어서 지금 이렇게 쓰고있는데 최대 세줄정도가 적당하겠네요',
        },
        {
            title:'시간은 언제가 가능한가요?',
            content: '연락가능 시간 : 월,화: 오후 6시이후/그외: 언제나 가능',
        },
        { 
            title: '나의 강점은 무엇이라고 생각하나요?',
            content: '시중에 나온 프로젝터는 다써봤다고 생각합니다 예상 예산과 방환경에 맞춰서 적절한 홈시어터환경을 조성해드리는데 강점이있다고 생각합니다 음악일을 하는만큼 사운드역시 충분한 지식을 갖고있으며 최적의 사운드 환경도 추가로 조성해드릴수있습니다',
        }
    ],
    effects_UNSTABLE: [persistAtom],
})





export const ReviewInfoState = atom({
    key:'reviewInfoState',
    default:[
        {
            before: testImg,
            after: testImg,
            title: '우리집에 생겨버린 영화관!',
            rating: 0,
            date: '2024.00.00',
            comment:'멘토님 덕분에 완전 쉽게 홈시어터 구축했습니당 최고에요. 특히 홈시어터 구축할때 예산때문에 망설이는 경우가 많은데 예산에 맞는 프로젝 최대 세줄까지만나오고 나머지는 더보기 페이지!'
        }
    ]
})