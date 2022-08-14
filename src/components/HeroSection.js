// This is Hero section of page

const HeroSection = (props) => {
    const {children} = props;
    return(
        <div className="flex flex-col xl:grid xl:grid-cols-9 bg-background xl:grid-rows-1 fonts-source-code-pro">
            {children}
        </div>
    )
}

export default HeroSection;