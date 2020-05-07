import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Order Data
function createData(id, time, speed, temperature, current, pressure, status) {
    return { id, time, speed, temperature, current, pressure, status };
}

const data = [
    createData(0, '17:00', 12, 34, 44, 10, 'HIGH PRESSURE'),
    createData(1, '18:00', 7, 34, 41, 23, 'HIGH PRESSURE'),
    createData(2, '19:00', 19, 34, 33, 24, 'RUNNING'),
    createData(3, '20:00', 23, 34, 55, 29, 'RUNNING'),
    createData(4, '21:00', 23, 34, 62, 41, 'RUNNING'),
    createData(5, '22:00', 24, 34, 51, 36, 'RUNNING'),
    createData(6, '23:00', 22, 34, 48, 58, 'RUNNING'),
    createData(7, '24:00', 18, 34, 31, 62, 'RUNNING'),
];

export default function Chart() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Title>Normalised Data (last hour)</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="speed" stroke="#8884d8" dot={false} />
                    <Line type="monotone" dataKey="temperature" stroke="#82ca9d" dot={false} />
                    <Line type="monotone" dataKey="current" stroke="#8884d8" dot={false} />
                    <Line type="monotone" dataKey="pressure" stroke="#82ca9d" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}