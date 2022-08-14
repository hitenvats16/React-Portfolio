const EmailBTN = (props) => {
    const { email } = props;
    return (
        <a href={`mailto:${email}`} className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-white rounded-lg group-hover:text-primary">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-primary"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                <span className="relative">Email Me!📧</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
    );
}

export default EmailBTN;