import { supabase } from "../databaseAuth";

export const updateInventory = async (barcode, updatedData) => {
    try {
        const { data, error } = await supabase
            .from('Inventory')
            .update(updatedData)
            .eq('barcode', barcode);

        if (error) {
            console.error('Error actualizando el inventario:', error);
            return null;
        }

        console.log('Inventario actualizado:', data);
        return data;
    } catch (error) {
        console.error('Error en la actualización del inventario:', error);
        return null;
    }
};

