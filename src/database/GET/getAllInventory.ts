import { supabase } from "../databaseAuth";

export const getAllInventory = async () => {
    try {
        const { count, data: Inventory, error } = await supabase
            .from('Inventory')
            .select('*', { count: 'exact' });

        if (error) {
            throw error;
        }

        return { count, Inventory };
    } catch (error) {
        console.log('Error al conseguir el inventario', error.message);
        return { Inventory: [] };
    }
};
