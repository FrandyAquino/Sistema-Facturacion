import { supabase } from "../databaseAuth";

export const getAllClients = async () => {
    try {
        const { count, data: Clients, error } = await supabase
            .from('Clients')
            .select('*', { count: 'exact' });

        if (error) {
            throw error;
        }

        return { count, Clients };
    } catch (error) {
        console.log('Error al conseguir clientes', error.message);
        return { Clients: [] };   
    }
};
