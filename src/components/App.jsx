import React, { Component } from 'react';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Statistic from './Statistics/Statistics';
import Notification from '../components/Notice/Notification';
import Section from './Section/Section';

export default class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    changeFeedback = ( { target } ) => {
        const { name } = target;
        this.setState( prevState => ( {
            [name]: prevState[name] + 1,
        } ) )
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return bad + good + neutral;
    }

    countPositiveFeedbackPercentage = () => Math.round( ( this.state.good / this.countTotalFeedback() ) * 100 );


    render () {
        return (
            <Section title="Please leave feedback">
                <FeedbackOptions changeFeedback={this.changeFeedback} />
                {this.countTotalFeedback() ? (
                    <Statistic
                        state={this.state}
                        countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
                        countTotalFeedback={this.countTotalFeedback()}
                    />
                ) : (
                        <Notification notice="We did not have any feedback" />
                    )
                }
            </Section>
        );
    }
}


