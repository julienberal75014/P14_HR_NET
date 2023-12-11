import { addEmployee } from "./reducer";

export function addEmployeeAction(employee) {
    return async (dispatch) => {
        dispatch(addEmployee(employee));
    };
}



