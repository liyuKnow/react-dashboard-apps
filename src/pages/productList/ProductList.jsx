import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import './ProductList.css';
import { productRows } from '../../SampleData'
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@material-ui/icons';

const NewUser = () => {
    const [rows, setRows] = useState(productRows);

    const handleDelete = (id) => {
        setRows(rows.filter(row => row.id !== id));
    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 90,
        },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="product-list-item">
                        <img src={params.row.img} alt="" className="product-list-image" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: "stock", headerName: "Stock", width: 100 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="product-list-item">
                        <Link to={`/product/${params.row.id}`}>
                            <button className="product-list-edit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="product-list-delete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </div>
                )
            }
        }


    ]
    return (
        <div className='product-list'>
            <DataGrid
                rows={rows}
                columns={columns}
                disableSelectionOnClick
                pageSize={6}
                checkboxSelection
            />
        </div>
    );
};

export default NewUser;
