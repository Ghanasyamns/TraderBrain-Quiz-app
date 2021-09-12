import Paper from '@material-ui/core/Paper';
import {Chart,PieSeries,Title} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
function Result(props) {
    console.log(props.Qlength,props.correctAns);
    
    const data = [
        { region: 'Correct Answer', val: props.correctAns },
        { region: 'Wrong Answer', val: props.Qlength-props.correctAns },
       
      ];
    return (
            <Paper className=' w-full h-full   '>
        <Chart
          data={data} 
        >
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
            color="red"
          />
          <Title
            text="Result of your Test"
          />
          <Animation />
        </Chart>
      </Paper>
    )
}

export default Result
