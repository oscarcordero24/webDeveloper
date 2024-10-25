import { useState } from "react";
import Card from "./Cards";

function TableInputs(props) {

    const cellStyle = `
    w-32 h-14 pl-2 pr-4 py-4
    `;

    return (
        <div className="w-full h-full p-2
                        flex justify-center items-center
                        border-4 rounded-2xl border-{rgb(236, 236, 236)}
                        shadow-border-1">
            <table className="w-full h-full">
                <thead>
                    <tr>
                        <th colSpan={2} className="w-full h-20 px-2 pb-2 pt-4">
                            <Card textContent={'Expenses'} fontSize={'text-xl'}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={cellStyle}>
                            <Card textContent={'Mortgage'} fontWeight={'font-bold'} fontSize={'text-xl'}/>
                        </td>
                        <td className={cellStyle}>
                            <Card textContent={'Amount'} fontSize={'text-xl'}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={cellStyle}>
                            <Card textContent={'Energy'} fontWeight={'font-bold'} fontSize={'text-xl'}/>
                        </td>
                        <td className={cellStyle}>
                            <Card textContent={'$0.00'} type={'input'} fontSize={'text-xl'}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={cellStyle}>
                            <Card textContent={'Water'} fontWeight={'font-bold'} fontSize={'text-xl'}/>
                        </td>
                        <td className={cellStyle}>
                            <Card textContent={'$0.00'} type={'input'} fontSize={'text-xl'}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={cellStyle}>
                            <Card textContent={'Trash'} fontWeight={'font-bold'} fontSize={'text-xl'}/>
                        </td>
                        <td className={cellStyle}>
                            <Card textContent={'$0.00'} type={'input'} fontSize={'text-xl'}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={cellStyle}>
                            <Card textContent={'HOA'} fontWeight={'font-bold'} fontSize={'text-xl'}/>
                        </td>
                        <td className={cellStyle}>
                            <Card textContent={'$0.00'} type={'input'} fontSize={'text-xl'}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={cellStyle}>
                            <Card textContent={'Tax'} fontWeight={'font-bold'} fontSize={'text-xl'}/>
                        </td>
                        <td className={cellStyle}>
                            <Card textContent={'Amount'} fontSize={'text-xl'}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={cellStyle}>
                            <Card textContent={'Vacancy'} fontWeight={'font-bold'} fontSize={'text-xl'}/>
                        </td>
                        <td className={cellStyle}>
                            <Card textContent={'Amount'} fontSize={'text-xl'}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
  
export default TableInputs;