import { PersonStanding, PiggyBank, Rocket, UserPlus } from "lucide-react"

export const AudienceResponse = () => {
    return (
        <div className="h-fit w-full flex justify-center gap-5 items-center ">
            <div className="h-fit w-fit flex items-center justify-center gap-1">
                <Rocket className="text-zinc-700/95" size={20} strokeWidth={3} />
                <p className="text-sm font-sans font-bold text-zinc-700/95">4.5 Rating</p>
            </div>
            <div className="h-fit w-fit flex items-center justify-center gap-1">
                <UserPlus className="text-zinc-700/95" size={19} strokeWidth={3} />
                <p className="text-sm font-sans font-bold text-zinc-700/95">100+</p>
            </div>
            <div className="h-fit w-fit flex items-center justify-center gap-1">
                <PiggyBank className="text-zinc-700/95" size={20} strokeWidth={3} />
                <p className="text-sm font-sans font-bold text-zinc-700/95">4.5 Rating</p>
            </div>
        </div>
    )
}