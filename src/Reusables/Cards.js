const CustomCard = (props) => {
    const { title, discription, colSpan, children, link } = props
    return (
        <a href={link} target="_blank" rel="noreferrer" className={` hover:animate-pulse w-full border-transparent cursor-pointer border-2 hover:border-blue-800 ease-in duration-300  px-5 py-5 h-full bg-[#0F3460] rounded-lg flex flex-row items-center col-span-${colSpan}`}>
            {children}
            <div className="w-full pl-3 xl:pl-5 h-full flex-col flex items-start">
                <h1 className="text-active font-bold text-xl">{title}</h1>
                <p className="text-non-active font-semibold text-md">{discription}</p>
            </div>
        </a>
    )
}

export default CustomCard;