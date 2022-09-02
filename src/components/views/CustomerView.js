import { Outlet, Route, Routes } from "react-router-dom"
import { TicketForm } from "../tickets/TicketForm"
import { TicketList } from "../tickets/TicketList"


export const CustomerViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey's Speedy Repair Shop</h1>
                    <div>Your broken electronics fixed in two days:
                        The day you drop it off and the day you pick it up.</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={<TicketList />} />
                <Route path="ticket/create" element={<TicketForm />} />
            </Route>
        </Routes>
    )
}