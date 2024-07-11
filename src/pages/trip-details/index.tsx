import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantsLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinatinAndDateHeader } from "./destination-and-date-header";

export function TripDetailsPage() {
    const [isCreateActivityModalOpen, setisCreateActivityModalOpen] = useState(false)

    function openCreatedActivityyModal() {
        setisCreateActivityModalOpen(true)
    }
    function closeCreatedActivityyModal() {
        setisCreateActivityModalOpen(false)
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
           <DestinatinAndDateHeader/>

            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold" >Atividades</h2>
                        <button onClick={openCreatedActivityyModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                            <Plus className='size-5' />
                            Cadastrar aividade
                        </button>
                    </div>

                    <Activities />
                </div>

                <div className="w-80 space-y-6">
                    <ImportantsLinks />
                    <div className='w-full h-px bg-zinc-800' />
                    <Guests />
                </div>
            </main>

            {isCreateActivityModalOpen && (
                <CreateActivityModal
                    closeCreatedActivityyModal={closeCreatedActivityyModal}
                />
            )}
        </div>
    )
}