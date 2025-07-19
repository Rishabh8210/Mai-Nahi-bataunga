import { CreateFreeNoteButton } from "../Common/buttons/CreateFreeNote"
import { WatchDemoButtom } from "../Common/buttons/WatchDemo"

export const MainTitle = () => {
    return (
        <div className="h-fit w-fit px-5 text-center flex flex-col gap-5.5">
            <h1 className="text-[42px] leading-12 font-bold font-sans">Double Your Learning with NoteFlow<sup className="text-2xl">AI</sup></h1>
            <p className="text-base px-2 font-medium text-zinc-500 tracking-wide font-sans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate maiores magni explicabo qui quod, quidem beatae ea quaerat! Nulla, dicta.</p>
            <div className="w-full py-5 h-fit flex flex-col gap-5 items-center justify-center">
                <CreateFreeNoteButton />
                <WatchDemoButtom />
            </div>
        </div>
    )
}