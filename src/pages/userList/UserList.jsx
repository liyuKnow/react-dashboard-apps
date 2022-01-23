import React, { useState } from 'react';
import './UserList.css';
import { DataGrid } from "@material-ui/data-grid";
import { userRows } from '../../SampleData';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const UserList = () => {
    const [rows, setRows] = useState(userRows);

    const handleDelete = (id) => {
        setRows(rows.filter((item) => item.id !== id));
    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 100,
        },
        {
            field: "username",
            headerName: "Username",
            width: 160,
            renderCell: (params) => {
                return (
                    <div className='user-list-username-column'>
                        <img src={params.row.avatar} alt="" className='user-list-avatar' />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: "email",
            headerName: "Email",
            width: 120
        },
        {
            field: "status",
            headerName: "Status",
            width: 120
        },
        {
            field: "transaction",
            headerName: "Transaction",
            width: 170
        },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link className='link' to={`/user/${params.row.id}`}>
                            <button className="user-list-edit">
                                Edit
                            </button>
                        </Link>
                        <DeleteOutline onClick={() => { handleDelete(params.row.id) }} className="user-list-delete" />
                    </>
                )
            }
        }
    ]

    return (
        <div className='user-list'>
            <DataGrid
                rows={rows}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
};
