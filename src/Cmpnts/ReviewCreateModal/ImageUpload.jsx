import '../ReviewModal/ReviewModal.css'


function ImageUpload({ label, id, imageSrc, gallery, onChange }) {
    return (
      <div>
        <div className='review-create_pic'>
          <label htmlFor={id}>
            {imageSrc ? <img src={imageSrc} alt="Uploaded" /> : <img src={gallery} />}
          </label>
        </div>
        <div className="modal_caption">{label}</div>
        <input id={id} type="file" onChange={onChange} style={{display: 'none'}} />
      </div>
    );
  }
  
  export default ImageUpload;