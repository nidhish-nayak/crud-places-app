const CardContainer = ({ children }) => {
    return (
        <ul className="grid justify-center md:m-2 md:p-1 lg:m-4 lg:p-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {children}
        </ul>
    );
};

export default CardContainer;
