import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signup = () => {
    return <>
        <div className="grid grid-cols-2 sm:flex-row md:flex-col">
            <div>
                <Auth />
            </div>
            <div>
                <Quote />
            </div>
        </div>

    </>
}