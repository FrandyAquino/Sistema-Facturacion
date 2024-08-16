import { supabase } from "../databaseAuth";

export const insertEmployees = async (employeesData) => {
    try {
        const { data, error } = await supabase
            .from('Employees')
            .insert([employeesData])
            .select();
        
        if (error) throw error;
        
        console.log('Empleado insertado:', data);
        return data;
    } catch (error) {
        console.log('Error al insertar un empleado', error.message);
    }
};
