import search from '../../../assets/search.png'

export default function CommunityInput(){
    return(
    <div className='cm_upper-wrap'>
                    <div className='cm_input-wrap'>
                        <input type='text' placeholder='나와 같은 궁금증이 있는지 검색해보세요'/>
                        <div>
                            <img src={search} />
                        </div>
                    </div>
                </div>
    )
}