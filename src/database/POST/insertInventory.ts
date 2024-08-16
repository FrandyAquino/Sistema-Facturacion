import { supabase } from "../databaseAuth";

export const insertInventory = async (inventoryData) => {
    try {
        const { data, error } = await supabase
            .from('Inventory')
            .insert([inventoryData])
            .select();
        
        if (error) throw error;
        
        console.log('Inventario insertado:', data);
        return data;
    } catch (error) {
        console.log('Error al insertar inventario', error.message);
    }
};
