import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppContext } from "../../../common/State";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const TopCompanies = () => {
  const { allCompanies } = useAppContext();
  const rows = [
    createData("Express", 159, 2000, "US", "$17M"),
    createData("Daewo", 237, 3000, "US", "$17M"),
    createData("Coach", 262, 256, "US", "$17M"),
    createData("Memo", 305, 365, "US", "$17M"),
    createData("Shuffle", 356, 5555, "US", "$17M"),
  ];
  return (
    <div className="top-companies">
      <h3>Top Companies</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Busses</TableCell>
              <TableCell align="right">Routes</TableCell>
              <TableCell align="right">Locations</TableCell>
              <TableCell align="right">Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allCompanies?.map((company) => (
              <TableRow
                key={company.name} // Adjust key based on actual unique identifier
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {company.name}
                </TableCell>
                <TableCell align="right">
                  {company.busFleetDetails?.length}
                </TableCell>
                <TableCell align="right">
                  {company.scheduleInformation?.length}
                </TableCell>
                <TableCell align="right">{company.name}</TableCell>
                <TableCell align="right">{company.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TopCompanies;
