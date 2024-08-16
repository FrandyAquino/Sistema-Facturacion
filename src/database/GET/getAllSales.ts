import { supabase } from "../databaseAuth";

export const getAllSales = async () => {
    try {
        const { data: Sales, error } = await supabase
            .from('Sales')
            .select(`
                *,
                Inventory(*),
                Clients(*)
            `);

        if (error) {
            throw error;
        }

        return { Sales };
    } catch (error) {
        console.log('Error al conseguir ventas', error.message);
        return { Sales: [] };   
    }
};
