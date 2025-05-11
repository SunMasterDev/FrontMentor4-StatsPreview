import { Card, CardContent } from "../ui/card"
import headerDesktop from "../../assets/images/image-header-desktop.jpg"

const CardStatus = () => {
    const stats = [
        { label: 'COMPANIES', value: '10k+' },
        { label: 'TEPLATES',   value: '314' },
        { label: 'QUERIES',    value: '12M+' },
      ];
  return (
    <Card className="flex flex-col-reverse text-center md:flex-row overflow-hidden max-w-[76rem] bg-desaturatedBlue text-white">
        <CardContent className="flex-1 p-4 md:p-16 space-y-6 md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold font-display">
                 Get <span className="text-softViolet">insights</span> that help your business grow.
            </h1>
            <p className="text-base md:text-base text-white/75 md:pt-6">
                Discover the benefits of data analytics and make <br /> better decisions regarding revenue, customer <br />experience, and overall efficiency.
            </p>
            {/* Status */}
            <div className="flex flex-col md:flex-row gap-6 pt-4 md:pt-10 justify-between">
                {
                    stats.map((items,index)=>(
                        <div key={index}>
                            <h2 className="text-2xl md:text-2xl font-bold font-display">{items.value}</h2>
                            <p className="text-sm tracking-wide text-white/60 mt-2">{items.label}</p>
                        </div>
                    ))
                }
            </div>
        </CardContent>
        {/* Image */}
            <div className="relative flex-1 md:">
                <img src={headerDesktop} alt="image-header-desktop" 
                className="h-full w-full object-cover brightness-110"/>
                <div className="absolute inset-0 bg-[#A95CD8]"
                style={{ mixBlendMode: "multiply", opacity:"0.80"}}></div>
            </div>
    </Card>
  )
}
export default CardStatus