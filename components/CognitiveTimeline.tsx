import Slider from 'rc-slider';
import React from 'react';
import 'rc-slider/assets/index.css';

const CognitiveTimeline: React.FC = () => {
  // Define the best times of day for each cognitive ability
  const cognitiveAbilities: { [key: string]: string } = {
    Analytical: 'Morning (9 am - 12 pm)',
    Perceptual: 'Morning (9 am - 12 pm)',
    Creative: 'Late Afternoon (2 pm - 5 pm)',
    Conceptual: 'Morning (9 am - 12 pm)',
    Strategic: 'Early Afternoon (12 pm - 2 pm)',
    Administrative: 'Evening (after 5 pm)',
    Technical: 'Morning or Early Afternoon',
    Collaborative: 'Morning or Early Afternoon'
  };

  // Render the timeline with cognitive abilities
  return (
    <div className="cognitive-timeline" style={{ width: '70%' }}>
      <h2>Best Times of Day for Cognitive Abilities</h2>
      <Slider
        min={0}
        max={23}
        marks={{
          0: '12:00 AM',
          6: '6:00 AM',
          12: '12:00 PM',
          18: '6:00 PM',
          23: '11:00 PM'
        }}
        step={1}
        dotStyle={{ borderColor: '#2db7f5' }}
        activeDotStyle={{ borderColor: '#2db7f5' }}
        railStyle={{ backgroundColor: '#ccc' }}
        trackStyle={{ backgroundColor: '#2db7f5' }}
        handleStyle={{
          borderColor: '#2db7f5',
          height: 15,
          width: 15,
          marginTop: -5,
          backgroundColor: '#fff'
        }}
      />
      <div className="timeline">
        {[...Array(24).keys()].map((hour) => (
          <div className="hour" key={hour}>
            <div className="time">{`${hour}:00`}</div>
            <div className="ability">
              {cognitiveAbilities[getCognitiveAbility(hour)]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to determine the cognitive ability based on the hour of the day
const getCognitiveAbility = (hour: number): string => {
  if (hour >= 9 && hour < 12) {
    return 'Analytical';
  } else if (hour >= 12 && hour < 14) {
    return 'Strategic';
  } else if (hour >= 14 && hour < 17) {
    return 'Creative';
  } else if (hour >= 17 || hour < 6) {
    return 'Administrative';
  } else {
    return 'Collaborative';
  }
};

export default CognitiveTimeline;
