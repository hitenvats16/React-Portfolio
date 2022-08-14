const Pill = (props) => {
    const {title, extraClaass} = props;
    return(
        <div className={["w-full h-max py-3 rounded-md bg-blue-500 text-white font-semibold",extraClaass]}>
            <h1>{title}</h1>
        </div>
    )
}

export default Pill;