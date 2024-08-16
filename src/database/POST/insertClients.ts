import { supabase } from "../databaseAuth";

export const insertClients = async (clientData) => {
    try {
        const { data, error } = await supabase
            .from('Clients')
            .insert([clientData])
            .select();
        
        if (error) throw error;
        
        console.log('Cliente insertado:', data);
        return data;
    } catch (error) {
        console.log('Error al insertar clientes', error.message);
    }
};
