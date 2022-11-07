import { classNames } from 'lib/classNames';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ChartData,
    ChartOptions
} from 'chart.js'
import { Line } from 'react-chartjs-2';
import cls from './Chart.module.scss'
import {Item} from "models/Data/types/data";
import {Month} from "components/Table/Month";

interface ChartProps {
    className?: string;
    data?: Item;
    min: number;
    max: number;
    yAxisKey: string;
}

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

export const Chart = (props: ChartProps) => {
    const {
        className,
        data,
        min,
        max,
        yAxisKey
    } = props;


    const dataChart: ChartData<'line', any> = {
            datasets: [
                {
                    label: 'Dataset',
                    backgroundColor: 'rgb(84,167,239)',
                    borderColor: 'rgb(84,167,239)',
                    pointRadius: 0,
                    data: data?.sales,
                    parsing: {
                        xAxisKey: 'weekEnding',
                        yAxisKey,
                    },
                    tension: 0.5
                },
            ]
        }


    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Test',
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,

                },
                ticks: {
                    color: 'rgb(176,176,176)',
                    source: 'data',
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                min,
                max,
                ticks: {
                    display: false,
                }
            }
        }
    }

    return (
        <div className={classNames(cls.Chart, {}, [className])}>
            <div style={{height: "500px"}}>
                <Line data={dataChart} options={options} className={cls.line}/>
            </div>
            <Month/>
        </div>
    );
};

