const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 3001;
const datasetPath = './dataset.csv';  // Provide the correct file path

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
      // Downsample the data using your algorithm (e.g., averaging in fixed-size windows)
      const downsampledData = downsample(data, 1000); // Adjust the window size as needed

      res.json(downsampledData);
    })
    .on('error', (error) => {
      console.error('Error reading file:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Your downsampling algorithm
function downsample(data, windowSize) {
  const downsampledData = [];

  for (let i = 0; i < data.length; i += windowSize) {
    const window = data.slice(i, i + windowSize);

    // Calculate the average timestamp and profitPercentage in the window
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
