import { Accordion, Table } from 'react-bootstrap'

const Stats = () => {
  return (
    <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
        <Accordion.Item eventKey="0" style={{ borderRadius: 10, marginBottom: 10 }}>
            <Accordion.Header>Target Mode</Accordion.Header>
            <Accordion.Body>
            <Table responsive bordered>
                <thead>
                    <tr>
                        <th>Matches Played</th>
                        <th>Matches Won</th>
                        <th>Matches Lost</th>
                        <th>Win Percentage</th>
                        <th>Overall Fours</th>
                        <th>Overall Sixs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>23</td>
                        <td>21</td>
                        <td>2</td>
                        <td>91.3%</td>
                        <td>45</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </Table>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{ borderRadius: 10, marginBottom: 10 }}>
            <Accordion.Header>Highscore Mode</Accordion.Header>
            <Accordion.Body>
            <Table responsive bordered>
                <thead>
                    <tr>
                        <th>Matches Played</th>
                        <th>Highscore</th>
                        <th>Achieved On</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10</td>
                        <td>145</td>
                        <td>2/7/23</td>
                    </tr>
                </tbody>
            </Table>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  )
}

export default Stats
