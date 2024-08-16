import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "@pages/Dashboard/Dashboard";
import Clients from "@pages/Clients/Clients";
import Inventory from "@pages/Inventory/Inventory";
import Suppliers from "@pages/Suppliers/Suppliers";
import Sales from "@pages/Sales/Sales";
import Employees from "@pages/Employees/Employees";
import AddClient from '@pages/Clients/AddClient';
import NotFound from "@pages/ERROR/NotFound";
import Login from "@pages/Auth/Login";
import Register from "@pages/Auth/Register";
import ProtectedRoute from "@pages/Auth/ProtectedRoute";
import { ClientsProvider } from "@context/ClientsContext.jsx";
import { InventoryProvider } from "@context/InventoryContext.jsx";
import { SuppliersProvider } from "@context/SuppliersContext.jsx";
import { EmployeesProvider } from "@context/EmployeesContext.jsx";
import AddInventory from '@pages/Inventory/AddInventory';
import AddSuppliers from '@pages/Suppliers/AddSuppliers';
import AddEmployees from '@pages/Employees/AddEmployees';
import { SalesProvider } from "@context/SalesContext";
import AddSales from '@pages/Sales/AddSales.jsx';

function App() {
  return (
    <Router>
      <ClientsProvider>
        <InventoryProvider>
          <SuppliersProvider>
            <EmployeesProvider>
              <SalesProvider>
              <Routes>
                <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
                <Route path="/clients" element={<ProtectedRoute><Clients /></ProtectedRoute>} />
                <Route path="/clients/addClient" element={<ProtectedRoute><AddClient /></ProtectedRoute>} />
                <Route path="/inventory" element={<ProtectedRoute><Inventory /></ProtectedRoute>} />
                <Route path="/inventory/addInventory" element={<ProtectedRoute><AddInventory /></ProtectedRoute>} />
                <Route path="/suppliers" element={<ProtectedRoute><Suppliers /></ProtectedRoute>} />
                <Route path="/suppliers/addSuppliers" element={<ProtectedRoute><AddSuppliers /></ProtectedRoute>} />
                <Route path="/sales" element={<ProtectedRoute><Sales /></ProtectedRoute>} />
                <Route path="/sales/addSales" element={<ProtectedRoute><AddSales /></ProtectedRoute>} />
                <Route path="/employees" element={<ProtectedRoute><Employees /></ProtectedRoute>} />
                <Route path="/employees/addEmployees" element={<ProtectedRoute><AddEmployees /></ProtectedRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              </SalesProvider>
            </EmployeesProvider>
          </SuppliersProvider>
        </InventoryProvider>
      </ClientsProvider>
    </Router>
  );
}

export default App;
