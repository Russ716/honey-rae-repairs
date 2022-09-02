import { Outlet, Route, Routes } from "react-router-dom"
import { TicketContainer } from "../tickets/TicketContainer"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeDetails } from "../employees/EmployeeDetails"
import { CustomerDetails } from "../Customers/CustomerDetails"
import { CustomerList } from "../Customers/CustomerList"

export const EmployeeViews = () => {
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
                <Route path="tickets" element={<TicketContainer />} />
                <Route path="employees" element={<EmployeeList />} />
                <Route path="employees/:employeeId" element={<EmployeeDetails />} />
                <Route path="customers" element={<CustomerList />} />
                <Route path="customers/:customerId" element={<CustomerDetails />} />
            </Route>
        </Routes>
    )
}
