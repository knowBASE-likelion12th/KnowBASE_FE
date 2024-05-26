import { atom } from 'recoil'
import testImg from '../../assets/testImg.png'


export const reviewInputState = atom({
    key: 'reviewInputState',
    default: {
        title: '',
        img1: testImg,
        img2: testImg,
        content:'',
        starRating: 0,
        term: '',
        budget: ''
    }
})