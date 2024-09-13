export interface EventDetailsProps {
  time: string; 
  inPlay: boolean; 
  score?: {       
    A: number;
    B: number;
  };
}

export const EventDetails = ({ time, inPlay }: EventDetailsProps) => {
  return (
    <div className="event-details">
      {!inPlay && <h2>{time}</h2>} 
      {inPlay && (            
        <div>
          <div className="column">
            {/* <h2>{score?.A}</h2>
            <h2>{score?.B}</h2> */}
          </div>
          <div className="column">
            <h2>LIVE</h2>
            <h2>Starting Soon</h2>
          </div>
        </div>
      )}
    </div>
  );
};
