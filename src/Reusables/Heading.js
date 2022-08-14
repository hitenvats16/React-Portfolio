const Heading = (props) => {
    const { title, className } = props;
    return (
        <h1 className={["text-active font-semibold text-2xl pb-2 xl:pb-4 mt-0",className]}>{title}</h1>
    )
}

export default Heading;