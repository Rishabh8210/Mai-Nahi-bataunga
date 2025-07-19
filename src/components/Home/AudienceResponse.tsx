import { PiggyBank, Rocket, UserPlus } from "lucide-react"

export const AudienceResponse = () => {
    return (
        <div className="h-fit w-full flex justify-center gap-3 items-center ">
            <div className="h-fit w-fit flex items-center justify-center gap-2">
                <Rocket className="text-zinc-700/95" size={24} strokeWidth={3} />
                <p className="text-sm font-sans font-bold text-zinc-700/95">4.5 Rating</p>
            </div>
            <div className="h-fit w-fit flex items-center justify-center gap-2">
                <UserPlus className="text-zinc-700/95" size={21} strokeWidth={3} />
                <p className="text-sm font-sans font-bold text-zinc-700/95">100+</p>
            </div>
            <div className="h-fit w-fit flex items-center justify-center gap-2">
                <PiggyBank className="text-zinc-700/95" size={27} strokeWidth={3} />
                <p className="text-sm font-sans font-bold text-zinc-700/95">4.5 Rating</p>
            </div>
        </div>
    )
}