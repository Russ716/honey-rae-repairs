
import { CustomerNavBar } from "./CustomerNav"
import { EmployeeNavBar } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)
    if (honeyUserObject.staff) {
        // ^ return employee view
        return < EmployeeNavBar />
    } else {
        // ^Return customer view
        return <CustomerNavBar />
    }
}

