import { atom } from 'recoil'

export const crntCategoryIdxState = atom({
    key: 'crntCategoryIdx',
    default: 0,
})

export const infoState = atom({
    key:'infoState',
    default: ''
})

export const availableTimeState = atom({
    key:'availableTimeState',
    default: ''
})

export const idState = atom({
    key:'idState',
    default: ''
})

export const strengthState = atom({
    key:'strengthState',
    default: ''
})

export const beforeMentoringState = atom({
    key:'beforeMentoringState',
    default: ''
})

export const whileMentoringState = atom({
    key:'whileMentoringState',
    default: ''
})

export const afterMentoringState = atom({
    key:'afterMentoringState',
    default: ''
})

export const clickedDwellingTypeState = atom({
    key: 'clickedDwellingTypeState',
    default: ''
})

export const clickedSpaceTypeState = atom({
    key: 'clickedSpaceTypeState',
    default: ''
})
export const clickedMentoringTypeState = atom({
    key: 'clickedMentoringTypeState',
    default: ''
})

export const clickedInterestTypeState = atom({
    key: 'clickedInterestTypeState',
    default: ''
})