import PricingCard from "./PricingCard";
import {useState} from "react";

const plans=[
    {
        name:"Starter",
        price:0,
        features:[
            "AI-powered content generation",
            "Basic templates and customization options",
            "Limited access to analytics and insights"
        ],
        isPopular:false
    },
    {
        name:"Pro",
        price:50,
        features:[
            "Unlimited AI-generated content",
            "Advanced templates and customization options",
            "Priority access to analytics and insights"
        ],
        isPopular:true
    },
    {
        name:"Enterprice",
        price:100,
        features:[
            "Unlimited everything",
            "Dedicated account manager",
            "Custom integrations and support"
        ],
        isPopular:false
    }
]

function pricingSection() {
    const [isYearly, setIsYearly]=useState(false);
    return (
        <section className="py-16 px-4 bg-grey-50">

            <div className="flex items-center justify-center gap-4 mb-12">
                <span className={`text-sm font-bold ${isYearly? 'text-gray-400': 'text-purple-600'}`}>Monthly</span>
                <button 
                onClick={()=>setIsYearly(!isYearly)}
                className={`w-14 h-7 rounded-full transition-colors duration-300
                    ${isYearly? 'bg-purple-600':'bg-gray-400'}`}>
                        <div className={`w-5 h-5 bg-black rounded-full shadow transition-transform duration-300 mx-1
                        ${isYearly? 'translate-x-7':'translate-x-0'}`}></div>
                    </button>
                    <span className={`text-sm font-bold ${isYearly?'text-purple-500':'text-gray-400'}`}>
                        Yearly <span className="text-green-500 text-sm font-bold">-20%</span>
                    </span>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {plans.map((plan, index)=>(
                    <PricingCard
                        key={index}
                        name={plan.name}
                        price={isYearly? Math.round(plan.price*0.8):plan.price}
                        features={plan.features}
                        isPopular={plan.isPopular}
                    />
                ))}
            </div>
        </section>
    )
}
export default pricingSection;