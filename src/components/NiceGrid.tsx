import React, { useRef } from "react";
import { Column, useTable } from "react-table";

import "./NiceGrid.css";
import { useAutoMaxHeight } from "./useAutoMaxHeight";

interface SimpleData {
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    col5: string;
    col6: string;
    col7: string;
    col8: string;
}

export const NiceGrid: React.FC = () => {
    const data = [
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
        {
            col1: "Hello",
            col2: "World",
            col3: "Lorem, ipsum dolor sit amet consectetur",
            col4: "Lorem ipsum dolor sit amet",
            col5: "Lorem, ipsum dolor.",
            col6: "Lorem, ipsum dolor.",
            col7: "Lorem, ipsum dolor.",
            col8: "Lorem, ipsum dolor.",
        },
    ];

    const columns: Column<SimpleData>[] = [
        {
            Header: "Column 1",
            accessor: "col1",
        },
        {
            Header: "Column 2",
            accessor: "col2",
        },
        {
            Header: "Column 3",
            accessor: "col3",
        },
        {
            Header: "Column 4",
            accessor: "col4",
        },
        {
            Header: "Column 5",
            accessor: "col5",
        },
        {
            Header: "Column 6",
            accessor: "col6",
        },
        {
            Header: "Column 7",
            accessor: "col7",
        },
        {
            Header: "Column 8",
            accessor: "col8",
        },
    ];

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    const ref = useRef<HTMLDivElement>(null);
    
    useAutoMaxHeight(ref);
   
    return (
        <div className="grid" ref={ref}>
            <div className="grid-toolbar">
                <p>This is a tools bar</p>
            </div>
            <div className="grid-grouping-header">
                <p>this is grouping header</p>
            </div>
            <div className="grid-header">table header</div>
            <div className="grid-content">
                <table
                    {...getTableProps()}
                    style={{ border: "solid 1px blue" }}
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{
                                            borderBottom: "solid 3px red",
                                            background: "aliceblue",
                                            color: "black",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: "10px",
                                                    border: "solid 1px gray",
                                                    background: "papayawhip",
                                                }}
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="grid-footer">
                <p>this is footer bar</p>
            </div>
        </div>
    );
};
