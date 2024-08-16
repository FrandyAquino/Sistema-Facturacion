import { supabase } from "../databaseAuth";

export const getAllEmployees = async () => {
    try {
        const { count, data: Employees, error } = await supabase
            .from('Employees')
            .select('*', { count: 'exact' });

        if (error) {
            throw error;
        }

        return { count, Employees };
    } catch (error) {
        console.log('Error al conseguir empleados', error.message);
        return { Employees: [] };
    }
};
