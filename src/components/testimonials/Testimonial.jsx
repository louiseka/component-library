export default function Testimonial({ imageUrl, altText, Icon, quote, author, workplace, testimonialBackground }) {




    return (
        <div className={`testimonial-container testimonial-${testimonialBackground} `}>
            {imageUrl && <div className="img-container">
                <img src={imageUrl} alt={altText} />

            </div>}
            <div className="text-container">
                <Icon className="testimonial-icon" />
                <p>{quote} </p>
                <div className="small-text">
                    <p className="small-bold"> {author} </p>
                    <p>{workplace} </p>
                </div>
            </div>
        </div >
    )

}