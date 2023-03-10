import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, CartesianAxis
} from 'recharts';
import { hot } from 'react-hot-loader';
import { evaluate } from 'mathjs';

// Takes a function and turns it into points in the form:
// [{x: '3', y: '5'},{x: '5', y: '3'},...]
// @param _function   The function to be converted to data points
// @param n           The number of segments of the graph. (n+1) = number of data points to generate.
// @param startX      The x-value to start at
// @param endX        The x-value to end at
// Time Complexity: O(n)
const functionToData = (_function, n, startX, endX) => {
  var increment = (endX - startX) / n;
  const data = [];
  for (var i = startX; i <= endX; i = i + increment) {
    var tempObj = {};
    tempObj["x"] = i;

    "strict mode";
    try {
      tempObj["y"] = evaluate(_function, { x: i });
    }
    catch (err) { }

    data.push(tempObj);
  }

  return (
    data
  );
}

// Takes a function and turns it into a piecewise with points in the form:
// [{x: '3', y: '5'},{x: '5', y: '3'},...]
// @param _function   The function to be converted to data points
// @param n           The number of segments of the graph. (n+1) = number of data points to generate.
// @param startX      The x-value to start at
// @param endX        The x-value to end at
// Time Complexity:
const functionToPiecewise = (_function, n, startX, endX) => {
  var increment = (endX - startX) / n;
  const data = [];
  for (var i = startX; i <= endX; i = i + increment) {
    var tempObj = {};
    tempObj["x"] = i;

    "strict mode";
    try {
      tempObj["y"] = evaluate(_function, { x: i });
    }
    catch (err) { }

    data.push(tempObj);
  }

  return (
    data
  );
}

// Component for the graph
// @param origFunction  The original function inputted by the user.
// This should be a Javascript function that will be graphed
// and turned into a piecewise.
const Graph = ({ origFunctionStr, showOrigFuncOpt, showPiecewiseFuncOpt }) => {

  // An array of Lines to be added to the graph
  const lines = [];
  // Only render the line if its corresponding GraphOption is checked



  return (
    < LineChart width={1000} height={500} margin={{ top: 5, right: 30, left: 20, bottom: 5 }
    }>
      <CartesianGrid strokeDasharray="3 3" y="3" />
      <CartesianAxis y="5" />
      <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} scale="auto" label="x" />
      <YAxis type="number" domain={['dataMin', 'dataMax']} scale="auto" label="y" />
      <Tooltip />
      <Legend />
      {showOrigFuncOpt === true &&
        <Line
          name="Original Function"
          dot={false}
          type="monotone"
          data={functionToData(origFunctionStr, 100, -5, 10)}
          dataKey="y"
          stroke="#8884d8"
          label="test"
          isAnimationActive={false}
        />
      }
      {showPiecewiseFuncOpt === true &&
        < Line
          name="Piecewise Function"
          type="linear"
          dot={true}
          data={functionToData(origFunctionStr, 15, -5, 10)}
          dataKey="y"
          stroke="#eb4f34"
          label="test"
          isAnimationActive={false}
        />
      }
      {/* <Line name="Piecewise Function" dot={false} type="linear" data={functionToData(origFunction, 100, 0, 10)} dataKey="y" stroke="#8884d8" label="test"/> */}
    </LineChart >

  );
}

export default hot(module)(Graph);




