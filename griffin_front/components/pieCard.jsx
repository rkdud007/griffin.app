import styled from 'styled-components';


const StyledPieCard = styled.div`
  .statistics {
    min-width: 200px;

  }

  h1 {
    font-weight: 900;    
  }

  .chart {
    height: 200px;
    min-width: 300px;
  }
  min-height: 300px;
  align-items: center;
  text-align: center;
  min-width: 400px;
  display: flex;
  flex-direction: row;
  background-color: white;
`

const PieCard = ({pie, statistics, title})=>{

    return (
        <StyledPieCard>
            <div className="statistics">
                <h3>{title}</h3>
                <h1>{statistics}</h1>
            </div>
            <div className="chart">
                {pie}
            </div>
        </StyledPieCard>
    )
}

export default PieCard