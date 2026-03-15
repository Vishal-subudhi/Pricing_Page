function pricingCard({name,price,features,isPopular}){
    return (
        <div className={`bg-white rounded-2xl shadow-md p-8 flex flex-col ${isPopular? 'border-2 border-purple-600 scale-105':'border border-grey-200'}`}>
            {isPopular && (
                <span className="bg-puple-600 text-purple-600 text-2xl font-bold py-1 rounded-full self-start mb-4">
                Most Popular
                </span>
            )}
            <h2 className="text-2xl font-bold text-grey-800">{name}</h2>
            <p className="text-4xl font-bold text-purple-600 mt-2 mb-6">
                ${price}<span className="text-base text-grey-400 font-normal">/mo</span>
            </p>
            <ul className="flex flex-col gap-3 mb-4">
                {features.map((feature, index)=>(
                    <li key={index} className="flex items-center gap-2 text-grey-600 text-sm">
                        <span className="text-purple-500">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <button className={`mt-auto py-3 rounded-xl font-semibold ${isPopular
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'border border-purple-600 text-purple-600 hover:bg-purple-50'}`}>
                Get Started
            </button>

        </div>
    )
}

export default pricingCard;