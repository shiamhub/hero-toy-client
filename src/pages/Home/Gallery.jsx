
const Gallery = ({galleryImg}) => {
    const { image} = galleryImg;
    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <img className="border-8 border-sky-500 rounded-xl h-full" src={image} alt="" />
        </div>
    );
};

export default Gallery;