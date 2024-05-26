import { atom } from 'recoil'
import testImg from './assets/testImg.png'// dummy img

//더미 데이터 (추후 fetching한 json 데이터 매핑 필요)
export const mentorListState = atom({
    key: 'mentorListState',
    default:[]
})

export const crntMentorState = atom({
  key: 'crntMentorState',
  default: {}
})

export const mentiListState = atom({
    key: 'mentiListState',
    default: []
})

export const crntMentiState = atom({
    key: 'crntMentiState',
    default: {}
  })

export const selectedMainNavbarState = atom({
    key:'selectedMainNavBarState',
    default:''
})

export const selectedNavbarState = atom({
    key:'selectedNavBarState',
    default:'소개'
})

export const selectedMentiNavbarState = atom({
    key:'selectedMentiNavbarState',
    default:'작성 글'
})

export const postState = atom({
    key: 'postState',
    default: [
        {
            "postId": 1,
            "postTitle": "제목",
            "postContent": "내용",
            "postImgPath": "이미지",
            "nickname": "nickname",
            "postAuthorProfImg": "string",
            "updatedAt": "2024-05-25T16:44:10.199599"
        },
        {
            "postId": 2,
            "postTitle": "제목",
            "postContent": "내용",
            "postImgPath": "이미지",
            "nickname": "nickname",
            "postAuthorProfImg": "string",
            "updatedAt": "2024-05-25T16:44:14.114309"
        },
        {
            "postId": 3,
            
            "postTitle": "제목",
            "postContent": "내용",
            "postImgPath": "이미지",
            "nickname": "mentorNickname",
            "postAuthorProfImg": "string",
            "updatedAt": "2024-05-25T16:44:19.207289"
        },
        {
            "postId": 4,
            "postTitle": "제목",
            "postContent": "내용",
            "postImgPath": "이미지",
            "nickname": "mentorNickname",
            "postAuthorProfImg": "string",
            "updatedAt": "2024-05-25T16:44:22.670628"
        },
        {
            "postId": 5,
            "postTitle": "제목",
            "postContent": "내용",
            "postImgPath": "이미지",
            "nickname": "nickname",
            "postAuthorProfImg": "string",
            "updatedAt": "2024-05-25T16:44:27.979651"
        },
        {
            "postId": 6,
            "postTitle": "제목",
            "postContent": "내용",
            "postImgPath": "이미지",
            "nickname": "nickname",
            "postAuthorProfImg": "string",
            "updatedAt": "2024-05-25T16:44:31.325159"
        },
        {
            "postId": 7,
            "postTitle": "제목",
            "postContent": "내용",
            "postImgPath": "이미지",
            "nickname": "nickname",
            "postAuthorProfImg": "string",
            "updatedAt": "2024-05-25T16:44:37.524719"
        },
        {
            "postId": 8,
            "postTitle": "제목",
            "postContent": "내용",
            "postImgPath": "이미지",
            "nickname": "MenteeNickname2",
            "postAuthorProfImg": "string",
            "updatedAt": "2024-05-25T16:45:10.341813"
        },
    ]
})

export const crntPostState = atom({
    key: 'crntPostState',
    default: {}
})

export const postTitleState = atom({
    key: 'postTitleState',
    default: ''
})

export const postContentState = atom({
    key: 'postContentState',
    default: ''
})

export const crntClickedCategoriesState = atom({
    key: 'crntClickedCategoriesState',
    default:[]
})

export const crntClickedCategoryState = atom({
    key: 'crntClickedCategoryState',
    default:'조회순'
})

export const isReviewClickedState = atom({
    key: 'isReviewClickedState',
    default: false
})

export const isReviewCreateClickedState = atom({
    key: 'isReviewCreateClickedState',
    default: false
})

export const isContactClickedState = atom({
    key: 'isContactClickedState',
    default: false
})