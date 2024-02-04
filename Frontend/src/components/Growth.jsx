import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);

const Graph = () => {
  const [downsampledData, setDownsampledData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);
  const [displayType, setDisplayType] = useState('yearly');
  const [chartDataAvailable,setChartDataAvailable] = useState(false);

  useEffect(() => {
   
    fetch('https://chakr-assignment-deploy.onrender.com/api/downsampled-data')
      .then(response => response.json())
      .then(data => {
        setDownsampledData(data);

        if (chartInstance) {
          chartInstance.destroy();
        }
        setChartDataAvailable(true);
        createChart(data, displayType);
      })
      .catch(error => console.error('Error fetching downsampled data:', error));

    // Cleanup: Destroy chart instance on component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [displayType]);

  const createChart = (data, type) => {
    const ctx = document.getElementById('myChart');
    
    let lastDisplayedYear = null;
  
    const chartData = {
      labels: data.map(point => {
        const currentYear = dayjs(point.timestamp).format('YYYY');
        const label = type === 'yearly' && currentYear !== lastDisplayedYear
          ? currentYear
          : (type === 'monthly' ? dayjs(point.timestamp).format('MMMM YYYY') : '');
  
        return label;
      }),

      datasets: [
        {
          label: 'Profit Percentage',
          data: data.map(point => point.profitPercentage),
          borderColor: 'green',
          backgroundColor: (context) => {
            const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, context.chart.height);
            gradient.addColorStop(0, 'rgba(37, 205, 37, 0.4)');
            gradient.addColorStop(0.9959, 'rgba(37, 205, 37, 0)');
    
            return gradient;
          },
          borderWidth: 1,
          fill: true,
          pointRadius: 0,
        },
      ],

    };
  
    // Update lastDisplayedYear based on the last timestamp in data
    lastDisplayedYear = dayjs(data[data.length - 1].timestamp).format('YYYY');
  
    const chartConfig = {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              // text: type === 'yearly' ? 'Year' : 'Month',
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10, 
            },
          },
          y: {
            title: {
              display: false,
             
            },
            min: 0,
            ticks: {
              stepSize: 10,
              callback: (value) => `${value}k`,
            },
          },
        },
        elements: {
          line: {
            borderWidth: 1,
            fill: true,
            borderDash: [5, 5], 
          },
        },
        plugins: {
          legend: {
            display: false, // Set to false to hide the legend
          },
        },
      },
    };
    const newChartInstance = new Chart(ctx, chartConfig);
    setChartInstance(newChartInstance);
  };

  const handleToggle = (selectedType) => {
    setDisplayType(selectedType);
  };
  if(chartDataAvailable){
    return (
      <div className='w-[557px] h-[256px] rounded-[16px] p-[20px] gap-[8px] bg-[#FFFFFF]'>
        <div className='flex justify-between'>
        <div className='font-[600] text-[20px] leading-[24.2px]'>GROWTH</div>
        <select className='' id="displayType" value={displayType} onChange={(e) => handleToggle(e.target.value)}>
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
        </select>
        </div>
        
        <div className='h-[232px]'>
        <canvas id="myChart" />
        </div>  
       
      </div>
    ) 
  }
  return (
    <div className='w-[557px] h-[256px] rounded-[16px] p-[20px] gap-[8px] bg-[#FFFFFF]'>
      <div className='flex justify-between'>
        <div className='font-[600] text-[20px] leading-[24.2px]'>GROWTH</div>
        <select className='' id="displayType" value={displayType} onChange={(e) => handleToggle(e.target.value)}>
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
        </select>
      
      </div>
      <div className='flex justify-center items-center'>
        Loading...
      </div>
    </div>
  )
  
};

export default Graph;

