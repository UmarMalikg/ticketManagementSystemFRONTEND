import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppContext } from "../../../common/State";

const CompanyTicketsSold = () => {
  const { allCompanies } = useAppContext();
  return (
    <div className="top-companies">
      <h3>Top Companies</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Ticket Amount</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allCompanies?.map((company) => (
              <TableRow
                key={company.name} // Adjust key based on actual unique identifier
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{company.name}</TableCell>
                <TableCell align="right">{company.name}</TableCell>
                <TableCell align="right">{company.name}</TableCell>
                <TableCell align="right">View Details</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CompanyTicketsSold;
