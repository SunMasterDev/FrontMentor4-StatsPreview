import { Card, CardContent } from "../ui/card"
import headerDesktop from "../../assets/images/image-header-desktop.jpg"

const CardStatus = () => {
    const stats = [
        { label: 'COMPANIES', value: '10k+' },
        { label: 'TEPLATES',   value: '314' },
        { label: 'QUERIES',    value: '12M+' },
      ];
  return (
    <Card className="flex flex-col-reverse text-center md:text-left md:flex-row overflow-hidden max-w-4xl bg-desaturatedBlue text-white">
        <CardContent className="flex-1 p-8 md:p-10 space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold font-display">
                 Get <span className="text-softViolet">insights</span> that help your business grow.
            </h1>
            <p className="text-sm md:text-base text-white/75 leading-relaxed">
                Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
            </p>
            {/* Status */}
            <div className="flex flex-col md:flex-row gap-6 pt-4 justify-between">
                {
                    stats.map((items,index)=>(
                        <div key={index}>
                            <h2 className="text-xl font-bold font-display">{items.value}</h2>
                            <p className="text-xs tracking-wide text-white/60">{items.label}</p>
                        </div>
                    ))
                }
            </div>
        </CardContent>
        {/* Image */}
            <div className="flex-1 relative">
                <img src={headerDesktop} alt="image-header-desktop" 
                className="h-full w-full object-cover brightness-125"/>
                <div className="absolute inset-0 bg-[#A157CE]"
                style={{ mixBlendMode: "multiply", opacity: 0.98 }}></div>
            </div>
    </Card>
  )
}
export default CardStatus