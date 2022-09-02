
import { EmployeeViews } from "./EmployeeView"
import { CustomerViews } from "./CustomerView"


export const ApplicationViews = () => {

	const localHoneyUser = localStorage.getItem("honey_user")
	const honeyUserObject = JSON.parse(localHoneyUser)
	if (honeyUserObject.staff) {
		// ^ return employee view
		return < EmployeeViews />
	} else {
		// ^Return customer view
		return <CustomerViews />
	}
}