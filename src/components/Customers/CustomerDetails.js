import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./customers.css"
export const CustomerDetails = () => {
    const { customerId } = useParams()
    const [customer, updateCustomer] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/Customers?_expand=user&userId=${customerId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleCustomer = data[0]
                    updateCustomer(singleCustomer)
                })
        },
        [customerId]
    )

    return <section className="customer" >
        <header className="customer__header">{customer?.user?.fullName}</header>
        <div>Email: {customer?.user?.email} </div>
        <div>Contact: {customer.phoneNumber} </div>
        <div>Habitat: {customer.address} </div>
        <footer className="customer__footer"></footer>
    </section>
}