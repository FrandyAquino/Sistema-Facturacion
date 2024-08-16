import { supabase } from "../databaseAuth";

export const getAllSuppliers = async () => {
    try {
        const { count, data: Suppliers, error } = await supabase
            .from('Suppliers')
            .select('*', { count: 'exact' });

        if (error) {
            throw error;
        }

        return { count, Suppliers };
    } catch (error) {
        console.log('Error al conseguir proveedores', error.message);
        return { Suppliers: [] };
    }
};
