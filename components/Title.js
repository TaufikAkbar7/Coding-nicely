const Title = ({ title, subTitle }) => {
    return (
        <div className={`flex flex-col justify-center items-center mb-10`}>
            <span className="text-blue-500 text-lg font-medium">{title}</span>
            <h1 className={`font-semibold text-4xl text-secondary`}>{subTitle}</h1>
        </div>
    )
}

export default Title
