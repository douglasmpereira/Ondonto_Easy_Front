import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getAgendamento } from '../service/axiosClient';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosGet from '../hooks/useAxiosGet';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridActionsCellItem } from '@mui/x-data-grid';
import "./tabela.css"



const columns = [
  // { field: 'id', headerName: 'id', width: 70 },
  { field: 'cliente', headerName: 'Nome Cliente', width: 140,  headerAlign: 'center' },
  { field: 'dia', headerName: 'Dia', width: 130 },
  { field: 'hora', headerName: 'Hora', width: 130 },
  // { field: 'status', headerName: 'Status', width: 130 },
  { field: 'servico', headerName: 'Serviço',type: 'number',width: 90,},
  { field: 'funcionario', headerName: 'Funcionario',type: 'number',width: 90,},
  { field: 'status', headerName: 'campoNovo',width: 90,
  renderCell: ()  =>{<button>aperte</button> }
}
  


//   {
//     field: 'preco',
//     headerName: 'Preço',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.nome || ''} ${params.row.servico || ''}`,
//   },
];


export default function DataTable() {

  const { tasks } = useAxiosGet('/agendamento')
  const [agendamentos, setAgendamentos] = useState([])


  useEffect(() => {
      if (!tasks) return
      setAgendamentos(tasks)
     // setIdProduto(tasks.length)
  }, [tasks])
  
    const newArray = agendamentos.map( item =>{
    return{
    id: item.id,
    dia: item.dia,
    hora: item.hora,
    status: item.status,
    servico: item.servico.nome,
    funcionario: item.funcionario.nome,
    cliente: item.cliente.nome

  }}
  )
    
  return (
    <div style={{ height: 550, width: '100%' }}>
      <DataGrid
        rows={newArray}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
      
    </div>
  );
}

// import * as React from 'react';
// import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SecurityIcon from '@mui/icons-material/Security';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
// import { randomCreatedDate, randomUpdatedDate } from '@mui/x-data-grid-generator';
// import { getAgendamento } from '../service/axiosClient';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import useAxiosGet from '../hooks/useAxiosGet';

// const initialRows = [
//   {
//     id: 1,
//     name: 'Damien',
//     age: 25,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//     isAdmin: true,
//     country: 'Spain',
//     discount: '',
//   },
//   {
//     id: 2,
//     name: 'Nicolas',
//     age: 36,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//     isAdmin: false,
//     country: 'France',
//     discount: '',
//   },
//   {
//     id: 3,
//     name: 'Kate',
//     age: 19,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//     isAdmin: false,
//     country: 'Brazil',
//     discount: 'junior',
//   },
// ];

// export default function ColumnTypesGrid() {
//   const [rows, setRows] = React.useState(initialRows);
//   const { tasks } = useAxiosGet('/agendamento')
//   const [produtos, setProdutos] = useState([])


//   useEffect(() => {
//       if (!tasks) return
//       setProdutos(tasks)
//      // setIdProduto(tasks.length)
//   }, [tasks])

//   const deleteUser = React.useCallback(
//     (id) => () => {
//       setTimeout(() => {
//         setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//       });
//     },
//     [],
//   );

//   const toggleAdmin = React.useCallback(
//     (id) => () => {
//       setRows((prevRows) =>
//         prevRows.map((row) =>
//           row.id === id ? { ...row, isAdmin: !row.isAdmin } : row,
//         ),
//       );
//     },
//     [],
//   );

//   const duplicateUser = React.useCallback(
//     (id) => () => {
//       setRows((prevRows) => {
//         const rowToDuplicate = prevRows.find((row) => row.id === id);
//         return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
//       });
//     },
//     [],
//   );

//   const columns = React.useMemo(
//     () => [
//       { field: 'id', type: 'string' },
//       { field: 'data', type: 'string' },
//       { field: 'hora', type: 'number' },
//       { field: 'dateCreated', type: 'date', width: 130 },
//       { field: 'lastLogin', type: 'dateTime', width: 180 },
//       { field: 'isAdmin', type: 'boolean', width: 120 },
//       {
//         field: 'country',
//         type: 'singleSelect',
//         width: 120,
//         valueOptions: [
//           'Bulgaria',
//           'Netherlands',
//           'France',
//           'United Kingdom',
//           'Spain',
//           'Brazil',
//         ],
//       },
//       {
//         field: 'discount',
//         type: 'singleSelect',
//         width: 120,
//         editable: true,
//         valueOptions: ({ row }) => {
//           if (row === undefined) {
//             return ['EU-resident', 'junior'];
//           }
//           const options = [];
//           if (!['United Kingdom', 'Brazil'].includes(row.country)) {
//             options.push('EU-resident');
//           }
//           if (row.age < 27) {
//             options.push('junior');
//           }
//           return options;
//         },
//       },
//       {
//         field: 'actions',
//         type: 'actions',
//         width: 80,
//         getActions: (params) => [
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             onClick={deleteUser(params.id)}
//           />,
//           <GridActionsCellItem
//             icon={<SecurityIcon />}
//             label="Toggle Admin"
//             onClick={toggleAdmin(params.id)}
//             showInMenu
//           />,
//           <GridActionsCellItem
//             icon={<FileCopyIcon />}
//             label="Duplicate User"
//             onClick={duplicateUser(params.id)}
//             showInMenu
//           />,
//         ],
//       },
//     ],
//     [deleteUser, toggleAdmin, duplicateUser],
//   );

//   return (
//     <div style={{ height: 300, width: '100%' }}>
//       <DataGrid columns={columns} rows={produtos} />
//     </div>
//   );
// }
