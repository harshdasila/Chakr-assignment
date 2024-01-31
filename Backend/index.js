const express = require('express');
const cors = require('cors')
const fs = require('fs');
const csv = require('csv-parser');
app.use(cors());

const app = express();
const port = 3001;
const datasetPath = './dataset.csv'; 

app.use(express.json());

app.get('/api/downsampled-data', (req, res) => {
  const data = [];

  fs.createReadStream(datasetPath) 
    .pipe(csv())
    .on('data', (row) => {

      const timestamp = parseTimestamp(row.timestamp || row.Timestamp);
      const profitPercentage = parseFloat(row.ProfitPercentage || row['Profit Percentage']);

      if (!isNaN(timestamp) && !isNaN(profitPercentage)) {
        data.push({
          timestamp,
          profitPercentage,
        });
      }
    })
    .on('end', () => {
      
      const downsampledData = downsample(data, 1000); 

      res.json(downsampledData);
    })
    .on('error', (error) => {
      console.error('Error reading file:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

function downsample(data, windowSize) {
  const downsampledData = [];

  for (let i = 0; i < data.length; i += windowSize) {
    const window = data.slice(i, i + windowSize);

    const avgTimestamp = window.reduce((sum, point) => sum + point.timestamp.getTime(), 0) / window.length;
    const avgProfitPercentage = window.reduce((sum, point) => sum + point.profitPercentage, 0) / window.length;

    downsampledData.push({
      timestamp: new Date(avgTimestamp),
      profitPercentage: avgProfitPercentage,
    });
  }

  return downsampledData;
}

// Function to parse timestamp
function parseTimestamp(timestamp) {
    return new Date(timestamp);
  }

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
