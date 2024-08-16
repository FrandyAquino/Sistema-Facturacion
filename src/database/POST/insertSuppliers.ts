import { supabase } from "../databaseAuth";

export const insertSuppliers = async (suppliersData) => {
    try {
        const { data, error } = await supabase
            .from('Suppliers')
            .insert([suppliersData])
            .select();
        
        if (error) throw error;
        
        console.log('Suplidor insertado:', data);
        return data;
    } catch (error) {
        console.log('Error al insertar un suplidor', error.message);
    }
};
