import {useState} from 'react'
import FatherUP from './fatherUpwardsDirect'
import {Row, Col,Card} from 'antd';

/* 
  This is the grandFather component. In the 'upwards direct' flow we supposedly pass data from the lower order components to the 
  higher ones. This can't be achieved like the 'downwards direct' flow because we can't pass data directly like before. So the workaround
  is to create a state variable (and its setter) in the higher order component and pass its setter to lower order components exactly like
  we passed the data in the downwards direct flow. This way, everyone who has the setter function can alter the higher order component's 
  state.
*/

export default function grandFatherUpwards() {
  
  const [grandData,setGrandData] = useState("default")

  return (
    <div>
      <Row>
      <Col span={8}></Col>
        <Col span={8}>
        <Card title="I am GrandFather:" extra={<h1>{grandData}</h1>} style={{ width: "100%"}}>

        <FatherUP data={grandData} stateFunction={setGrandData}></FatherUP>

      </Card>
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </div>
  )
}