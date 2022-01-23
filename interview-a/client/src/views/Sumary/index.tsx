import { useEffect, useState } from "react";
import { Container, Card, ListGroup, Badge } from 'react-bootstrap';
import SurveyCounter, { ISurveyCounter } from '../../entities/SurveyCounter'



const Sumary = () => {

    const [counterList, setCounterList] = useState<ISurveyCounter>();

    useEffect(() => {
        const loadCounters = async (): Promise<void> => {
        const data = await fetch(`http://localhost:2047/api/counters`)
            .then(response => response.json())
            .catch(error => console.log(error))

           if(data){
             setCounterList(new SurveyCounter(data))
           }
        }
        loadCounters();
    }, []);


    const renderSurveyList = () => {
        if(counterList?.counters){
            const surveys = counterList?.counters;
            
               const surveyList = surveys.map((survey) => {
                   const response = survey?.content;
                   const responseList = response.map((response) => (
                       <ListGroup.Item as="li" key={response.response}>
                            {response.response}:    <Badge variant="primary" >{response.counter}</Badge>
                        </ListGroup.Item>
                   ))
                return (
                    <Card key={survey.id}>
                        <Card.Body>
                            <Card.Title>{survey.question}</Card.Title>
                            <ListGroup as="ol" >
                               {responseList}
                            </ListGroup>
                        </Card.Body>
                    </Card>
               )
            })
            return surveyList
                
        } else {
            return <h5>No surveys found</h5>
        }
    }


    return (
        <Container className="pad-t">
               <h1>Survey's counters </h1>
               {renderSurveyList()}
        </Container>
    )
}


export default Sumary;