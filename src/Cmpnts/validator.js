export const isIdentifiedUser = (id)=>{
    let userid = parseInt(window.sessionStorage.getItem('userid'), 10)
    if(userid === parseInt(id, 10)){return true}
    else {return false}
}

export const isMentor = ()=>{
    let isMentor = parseInt(window.sessionStorage.getItem('isMentor'), 10)
    if(isMentor === 1){return true}
    else {return false}
}