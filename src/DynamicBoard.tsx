import { Event } from './Event';
import { Header } from './Header';
import { useEffect, useRef } from 'react';

export function DynamicBoard() {

  const keyMarkets = ['Spread', 'Money Line', 'Total Points'];
  const title = 'WNBA'; 

  const events = [
    {
      id: 1,
      teamA: 'Chicago Sky',
      teamB: 'Minnesota Lynx',
      time: 'Tomorrow 7:30pm',
      spreadA: '+12.5',
      spreadB: '-12.5',
      moneyLineA: '+540',
      moneyLineB: '-800',
      totalPoints: 'O 156.5 / U 156.5',
      inPlay: false, 
    },
    {
      id: 2,
      teamA: 'Los Angeles Sparks',
      teamB: 'Seattle Storm',
      time: 'Today 8:00pm',
      spreadA: '+8.0',
      spreadB: '-8.0',
      moneyLineA: '+300',
      moneyLineB: '-400',
      totalPoints: 'O 162.0 / U 162.0',
      inPlay: false, 
      score: { A: 78, B: 85 }, 
    },
    {
      id: 3,
      teamA: 'Phoenix Mercury',
      teamB: 'Dallas Wings',
      time: 'Tomorrow 9:00pm',
      spreadA: '+5.5',
      spreadB: '-5.5',
      moneyLineA: '+200',
      moneyLineB: '-250',
      totalPoints: 'O 158.5 / U 158.5',
      inPlay: false, 
    },
    {
      id: 4,
      teamA: 'New York Liberty',
      teamB: 'Las Vegas Aces',
      time: 'Today 7:00pm',
      spreadA: '+3.0',
      spreadB: '-3.0',
      moneyLineA: '+150',
      moneyLineB: '-180',
      totalPoints: 'O 165.0 / U 165.0',
      inPlay: false, 
      score: { A: 72, B: 80 }, 
    },
    {
      id: 5,
      teamA: 'Washington Mystics',
      teamB: 'Indiana Fever',
      time: 'Tomorrow 6:00pm',
      spreadA: '+6.5',
      spreadB: '-6.5',
      moneyLineA: '+220',
      moneyLineB: '-270',
      totalPoints: 'O 160.5 / U 160.5',
      inPlay: false, 
    },
    {
      id: 6,
      teamA: 'Chicago Sky',
      teamB: 'Minnesota Lynx',
      time: 'Tomorrow 7:30pm',
      spreadA: '+12.5',
      spreadB: '-12.5',
      moneyLineA: '+540',
      moneyLineB: '-800',
      totalPoints: 'O 156.5 / U 156.5',
      inPlay: false,
    },
    {
      id: 7,
      teamA: 'Los Angeles Sparks',
      teamB: 'Seattle Storm',
      time: 'Today 8:00pm',
      spreadA: '+8.0',
      spreadB: '-8.0',
      moneyLineA: '+300',
      moneyLineB: '-400',
      totalPoints: 'O 162.0 / U 162.0',
      inPlay: false, 
      score: { A: 70, B: 76 }, 
    },
    {
      id: 8,
      teamA: 'Phoenix Mercury',
      teamB: 'Dallas Wings',
      time: 'Tomorrow 9:00pm',
      spreadA: '+5.5',
      spreadB: '-5.5',
      moneyLineA: '+200',
      moneyLineB: '-250',
      totalPoints: 'O 158.5 / U 158.5',
      inPlay: false, 
    },
    {
      id: 9,
      teamA: 'New York Liberty',
      teamB: 'Las Vegas Aces',
      time: 'Today 7:00pm',
      spreadA: '+3.0',
      spreadB: '-3.0',
      moneyLineA: '+150',
      moneyLineB: '-180',
      totalPoints: 'O 165.0 / U 165.0',
      inPlay: false, 
      score: { A: 85, B: 88 }, 
    },
    {
      id: 10,
      teamA: 'Washington Mystics',
      teamB: 'Indiana Fever',
      time: 'Tomorrow 6:00pm',
      spreadA: '+6.5',
      spreadB: '-6.5',
      moneyLineA: '+220',
      moneyLineB: '-270',
      totalPoints: 'O 160.5 / U 160.5',
      inPlay: false,
    },
    {
      id: 11,
      teamA: 'Chicago Sky',
      teamB: 'Minnesota Lynx',
      time: 'Tomorrow 7:30pm',
      spreadA: '+12.5',
      spreadB: '-12.5',
      moneyLineA: '+540',
      moneyLineB: '-800',
      totalPoints: 'O 156.5 / U 156.5',
      inPlay: false,
    },
    {
      id: 12,
      teamA: 'Los Angeles Sparks',
      teamB: 'Seattle Storm',
      time: 'Today 8:00pm',
      spreadA: '+8.0',
      spreadB: '-8.0',
      moneyLineA: '+300',
      moneyLineB: '-400',
      totalPoints: 'O 162.0 / U 162.0',
      inPlay: false, 
      score: { A: 65, B: 70 }, 
    },
    {
      id: 13,
      teamA: 'Phoenix Mercury',
      teamB: 'Dallas Wings',
      time: 'Tomorrow 9:00pm',
      spreadA: '+5.5',
      spreadB: '-5.5',
      moneyLineA: '+200',
      moneyLineB: '-250',
      totalPoints: 'O 158.5 / U 158.5',
      inPlay: false,
    },
    {
      id: 14,
      teamA: 'New York Liberty',
      teamB: 'Las Vegas Aces',
      time: 'Today 7:00pm',
      spreadA: '+3.0',
      spreadB: '-3.0',
      moneyLineA: '+150',
      moneyLineB: '-180',
      totalPoints: 'O 165.0 / U 165.0',
      inPlay: false, 
      score: { A: 92, B: 94 }, 
    },
    {
      id: 15,
      teamA: 'Washington Mystics',
      teamB: 'Indiana Fever',
      time: 'Tomorrow 6:00pm',
      spreadA: '+6.5',
      spreadB: '-6.5',
      moneyLineA: '+220',
      moneyLineB: '-270',
      totalPoints: 'O 160.5 / U 160.5',
      inPlay: false, 
    },
  ];
  const eventListRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = eventListRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 2;


    const scroll = () => {
      scrollContainer.scrollTop += scrollSpeed;

      if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
        scrollContainer.scrollTop = 0;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval); 
  }, []);

  return (
    <main className="main" style={{ backgroundImage: 'url(/oddsboards-basic-ui/assetsoddsboard.png)' }}>
      <Header title={title} keyMarkets={keyMarkets} />
      <section className="column" ref={eventListRef} style={{ maxHeight: '100vh', overflow: 'auto' }}>
        {events.map((event) => (
          <Event data={event} key={event.id} keyMarkets={keyMarkets} />
        ))}
      </section>
    </main>
  );
}

export default DynamicBoard;