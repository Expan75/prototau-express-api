import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, time, speed, temperature, current, pressure, status) {
    return { id, time, speed, temperature, current, pressure, status };
}

const rows = [
    createData(0, '16 Mar, 2019', '18.km/h', '34C', 312.44, 866.99, 'HIGH PRESSURE'),
    createData(1, '16 Mar, 2019', '18.km/h', '34C', 312.44, 866.99, 'HIGH PRESSURE'),
    createData(2, '16 Mar, 2019', '18.km/h', '34C', 312.44, 100.81, 'RUNNING'),
    createData(3, '16 Mar, 2019', '18.km/h', '34C', 312.44, 654.39, 'RUNNING'),
    createData(4, '15 Mar, 2019', '18.km/h', '34C', 312.44, 212.79, 'RUNNING'),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Trackdata() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Recent Trackdata</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>Speed</TableCell>
                        <TableCell>Temperature</TableCell>
                        <TableCell>Current</TableCell>
                        <TableCell>Pressure</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.time}</TableCell>
                            <TableCell>{row.speed}</TableCell>
                            <TableCell>{row.temperature}</TableCell>
                            <TableCell>{row.current}</TableCell>
                            <TableCell>{row.pressure}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more trackdata
        </Link>
            </div>
        </React.Fragment>
    );
}