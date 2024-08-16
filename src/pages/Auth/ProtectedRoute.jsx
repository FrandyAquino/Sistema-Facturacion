import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '@database/databaseAuth';

const ProtectedRoute = ({ children }) => {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
            setLoading(false);
        };
        fetchSession();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!session) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
