import { CircleDashed, UserCog } from "lucide-react";

export function Guests(){
    return(
        <div className="space-y-6">
                        <h2 className="font-semibold text-xl">Convidados</h2>

                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium">Luisa Neves</span>
                                    <span className="block text-xs text-zinc-400 truncate">luisa.neves@gmail.com</span>

                                </div>
                                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium">Fabiana Sacramento</span>
                                    <span className="block text-xs text-zinc-400 truncate">fabi@gmail.com</span>
                                </div>
                                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                            </div>
                        </div>
                        <button className=' w-full justify-center bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700' >
                            <UserCog className='size-5' />
                            Gerenciar convidados
                        </button>

                    </div>
    )
}