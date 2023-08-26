import { React, Component } from "react";
import "./SearchTableStyles.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

class SearchTable extends Component {
  render() {
    return CustomizedTables();
  }
}

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// function DataTable() {
//   return (
//     <div className="DataTable">
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 10 },
//           },
//         }}
//         pageSizeOptions={[10, 20, 30]}
//         checkboxSelection
//         sortable
//       />
//     </div>
//   );
// }

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F7F7F7",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, name) {
  return { id, name };
}

const rows = [
  createData(1, "Frozen yoghurt"),
  createData(1, "Ice cream sandwich"),
  createData(1, "Eclair"),
  createData(1, "Cupcake"),
  createData(1, "Gingerbread"),
  createData(1, "Frozen yoghurt"),
  createData(1, "Ice cream sandwich"),
  createData(1, "Eclair"),
  createData(1, "Cupcake"),
  createData(1, "Gingerbread"),
  createData(1, "Frozen yoghurt"),
  createData(1, "Ice cream sandwich"),
  createData(1, "Eclair"),
  createData(1, "Cupcake"),
  createData(1, "Gingerbread"),
  createData(1, "Frozen yoghurt"),
  createData(1, "Ice cream sandwich"),
  createData(1, "Eclair"),
  createData(1, "Cupcake"),
  createData(1, "Gingerbread"),
  createData(1, "Frozen yoghurt"),
  createData(1, "Ice cream sandwich"),
  createData(1, "Eclair"),
  createData(1, "Cupcake"),
  createData(1, "Gingerbread"),
];

function CustomizedTables() {
  return (
    <TableContainer component={Paper} className="DataTable">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>الاسم</StyledTableCell>
            {/* <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SearchTable;
