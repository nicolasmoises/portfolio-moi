import { About } from "@/components/About/Abaout";
import { Transition } from "@/components/Transition/Transition";

export default function AboutPage(){
    return (
        <div className="min-h-screen">
            <Transition/>
            <About></About>

        </div>

    )
}