import { useState } from "react";
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section'


export const App =()=>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleOnClick = event => {
    switch(event.target.name) {
      case 'good':
         setGood(prevState=> prevState+1)
         break;
      case 'neutral':
        setNeutral(prevState=> prevState+1)
         break;
      case 'bad':
        setBad(prevState=> prevState+1)
         break;
      default: 
        return;
    }
  }

  const totalCount = good+neutral+bad;
  const goodFeedbackPerFloor = Math.floor((good / totalCount)*100);
  const buttonsNameState = ['good', 'neutral', 'bad'];

  return (
  <div style={{ marginLeft: 50}}>
    <Section title="Please leave feedback">
        <FeedbackOptions options={buttonsNameState} onLeaveFeedback={handleOnClick} />
    </Section>
    {totalCount >0 ? 
    <Section title="Stastics">
        <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={totalCount} 
            positivePercentage={goodFeedbackPerFloor}/>
    </Section> : <p>No feedback given</p>}
  </div>  
  )
}

