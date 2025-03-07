export type CardProps = {
    title: string,
    description: string,
    icon: string,
}

const FeatureCard = ({ title, description, icon} : CardProps) => {
    return (
        <div className={"pt-6"}>
            <div className={"flow-root rounded-lg bg-gray-700 px-6 pb-8"}>
                <div className={"-mt-6"}>
                    <div>
                        <span className={"inline-flex items-center justify-center rounded-xl bg-blue-700 p-3 shadow-lg"}>
                            <svg xmlns={"http://www.w3.org/2000/svg"} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d={icon}/>
                            </svg>
                        </span>
                    </div>
                    <h3 className={"mt-8 text-lg font-semibold leading-8 tracking-tight text-white"}>{title}</h3>
                    <p className={"mt-5 text-base leading-7 text-gray-300"}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard 