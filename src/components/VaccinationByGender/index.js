import {PieChart, Pie, Cell, Legend} from 'recharts'

import {VaccinationByGenderContainer, Heading} from './styledComponents'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props
  return (
    <VaccinationByGenderContainer>
      <Heading>Vaccination by Gender</Heading>
      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationByGenderDetails}
          cx="50%"
          cy="30%"
          innerRadius="30%"
          outerRadius="60%"
          startAngle={180}
          endAngle={0}
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </VaccinationByGenderContainer>
  )
}

export default VaccinationByGender
