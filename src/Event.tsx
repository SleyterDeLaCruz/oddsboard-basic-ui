import { Participants } from './Participants';
import { EventDetails } from './EventDetails';
import { MarketView } from './MarketView';

export interface EventProps {
  data: {
    id: number;
    teamA: string;
    teamB: string;
    time: string;
    spreadA: string;
    spreadB: string;
    moneyLineA: string;
    moneyLineB: string;
    totalPoints: string;
    inPlay: boolean;
    score?: {
      A: number;
      B: number;
    };
  };
  keyMarkets: string[];
}

export const Event = ({ data, keyMarkets }: EventProps) => {
  return (
    <div className="event-view">
      <Participants
        participantA={data.teamA}
        participantB={data.teamB}
      />
      <EventDetails 
        time={data.time} 
        inPlay={data.inPlay} 
        score={data.score} 
      />
      <MarketView
        keyMarkets={keyMarkets}
      />
    </div>
  );
};
