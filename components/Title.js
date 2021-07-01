const Title = ({ title, subTitle, mb }) => {
    return (
        <div className={`flex flex-col justify-center items-center ${mb}`}>
            <span className="text-blue-500 text-lg font-medium">{title}</span>
            <h1 className={`font-semibold text-4xl text-secondary`}>{subTitle}</h1>
        </div>
    )
}

export default Title
