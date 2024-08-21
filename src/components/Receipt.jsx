import { Footnote, Tailwind } from "@fileforge/react-print";
import React from 'react';

function Receipt({ sale }) {
    return (
        <Tailwind>
            <div>
                <div
                    className="bg-gradient-to-r from-blue-600 to-blue-400 -z-10 absolute -left-[2cm] right-[25vw] -skew-y-12 h-[100vh] bottom-[95vh]" />
                <div
                    className="bg-gradient-to-r from-blue-600 to-blue-800 -z-20 absolute left-[75vw] -right-[2cm] -skew-y-12 h-[100vh] bottom-[90vh]" />
                <main className="text-slate-800 pt-24 h-[90vh] flex flex-col">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"
                        className="mx-auto w-32 mb-12 fill-blue-800">
                        <g>
                            <path d="M22.45,12.12c0-2.91-0.99-5.33-3.03-7.34C17.42,2.76,14.96,1.74,12,1.74c-2.93,0-5.4,1.02-7.43,3.05
            C2.56,6.8,1.55,9.26,1.55,12.15c0,0.84,0.11,1.63,0.27,2.37l9.71-7.65h5.01v14.58c1.06-0.5,2.03-1.13,2.91-1.99
            C21.46,17.45,22.45,15.01,22.45,12.12z" />
                            <path d="M4.91,19.78c1.4,1.26,3.03,2.12,4.9,2.48v-6.32L4.91,19.78z" />
                        </g>
                    </svg>
                    <h1 className="text-center text-2xl text-slate-800">
                        FRANDY FACTURACIÓN
                    </h1>
                    <p className="pt-2 text-slate-400 text-center">Factura #{sale.sale_id}</p>
                    <div className="p-12 flex-grow bg-white rounded-2xl rounded-t-none shadow-xl shadow-black/10">
                        <div className="flex justify-between gap-4">
                            <div>
                                <div className="text-sm text-gray-400 font-bold uppercase pb-1">
                                    Nombre del Cliente
                                </div>
                                <div className="flex gap-4 items-center">{sale.Clients.name}</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 font-bold uppercase pb-1">
                                    Total a pagar
                                </div>
                                <div className="flex gap-4 items-center">${sale.total_price.toFixed(2)}</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 font-bold uppercase pb-1">
                                    Fecha
                                </div>
                                <div className="flex gap-4 items-center">{new Date(sale.created_at).toLocaleDateString()}</div>
                            </div>
                        </div>
                        <h2 className="text-slate-600 font-bold text-sm py-6 pt-12 uppercase">
                            DETALLES
                        </h2>
                        <div className="bg-slate-100 px-6 py-2 rounded-md">
                            <table className="w-full">
                                <tr className="border-b text-slate-500">
                                    <td className="py-4">{sale.Inventory.name}<span className="pr-2"></span>x{sale.quantity}</td>
                                    <td className="py-4">${sale.total_price.toFixed(2)}</td>
                                </tr>
                                <tr className="font-bold text-slate-700">
                                    <td className="py-4">MONTO TOTAL A PAGAR</td>
                                    <td className="py-4">${sale.total_price.toFixed(2)}</td>
                                </tr>
                            </table>
                        </div>
                        <hr className="my-6" />
                        <Footnote>
                            Some additional conditions may apply. This template comes from the
                            react-print library, available at https://react.onedoclabs.com/
                        </Footnote>
                    </div>
                </main>
            </div>
        </Tailwind>
    );
}
export default Receipt;