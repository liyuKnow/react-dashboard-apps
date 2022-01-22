import './Chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ title, data, dataKey, grid }) => {


    return (
        <div className="chart">
            <h3 className="chart-title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey={dataKey} stroke="#eb3e3e" />
                    {grid && <CartesianGrid stroke="#e9e6e6" />}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
