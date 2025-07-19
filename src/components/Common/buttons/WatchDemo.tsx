import { PlayCircle } from "lucide-react"

export const WatchDemoButtom = () => {
    return (
        <button className="h-fit w-full flex justify-center  items-center gap-2 p-5 text-base font-semibold shadow rounded-xl">
            <PlayCircle size={20} strokeWidth={2} fill="#2B7FFF" color="white" />
            <p className="text-blue-500 font-semibold font-sans tracking-wide">Watch demo</p>
        </button>
    )
}