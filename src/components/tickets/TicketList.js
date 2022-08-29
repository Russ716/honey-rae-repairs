import "./tickets.css"
import { useEffect, useState } from "react"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    const [filteredTickets, setFiltered] = useState([])
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets`)
                .then(response => response.json())
                .then((ticketArray) => {
                    setTickets(ticketArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            if (honeyUserObject.staff) {
                // !for employees
                setFiltered(tickets)
            }
            else {
                // !for customers
                const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
                setFiltered(myTickets)
            }
        },
        [tickets]
    )

    return <>
        <h2>List of Tickets</h2>
        <article className="tickets">
            {
                filteredTickets.map(
                    (ticket) => {
                        return <section className="ticket">
                            <header>{ticket.description}</header>
                            <footer className="emergency" ><b>Emergency</b>: {ticket.emergency ? "🚨" : "No"}</footer>
                        </section>
                    }
                )
            }
        </article>
    </>
}
