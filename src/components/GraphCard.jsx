import styled from "styled-components";
import Barchart from "./Barchart"

const Content = styled.section`
  padding: 2em;
  background: whitesmoke;
`;

const groupBarChartOptions = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Group Committed vs Achieved',
    },
  },
};


const groupBarChartData = {
  datasets: [
    {
      label: 'Committed',
      data: [52],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Achieved',
      data: [22],
      borderColor: 'rgb(144, 238, 144)',
      backgroundColor: 'rgb(144, 238, 144, 0.5)',
    },
  ],
};

const individualBarChartOptions = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Individual Points Achieved',
    },
  },
};

const individualBarChartData = {
  datasets: [
    {
      label: 'Achieved',
      data: [8, 5, 13, 8],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export default ({ type }) => {
  return (
    <>
      <Content className="card col-6 mx-2">
        { (type == 'group')
          ? 
            <div> 
              {/* <h6> Committed vs Achieved </h6>  */}
              <Barchart 
                options={ groupBarChartOptions } 
                data={{ labels: [''], datasets: groupBarChartData.datasets }} 
                width={200}
                height={100}
              />
            </div>
          : 
            <div>
              {/* <div> Personal Progress vs Projected </div>  */}
              <Barchart 
                options={ individualBarChartOptions } 
                data={{ labels: ['Tom', 'Cal', 'Zach', 'Wright'], datasets: individualBarChartData.datasets }} 
                width={200}
                height={100}
              />
            </div>
        }
      </Content>
    </>
  )
}
