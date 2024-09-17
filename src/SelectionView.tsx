export interface SelectionProps {
  id?: string| number;
  line?: string;
  price?: string;
  suspended?: boolean;
  market: string;
}

export const Selection = ({ line, price, suspended = false }: SelectionProps) => {
  return (
    <div className="column">
      {!suspended && line && <h3>{line}</h3>}
      {!suspended && <h2>{price ?? "--"}</h2>}
      {!!suspended && (
        <img src={`/oddsboard-basic-ui/assets/lock.svg`} className="suspended" alt="suspended" />
      )}
    </div>
  );
};


export interface SelectionViewProps {
  market?: string;
}

export const SelectionView = ({ market }: SelectionViewProps) => {
  
  const selections = [
    { id: 1, line: "+4", price: "-115", suspended: false, market: 'Spread' },
    { id: 2, line: "-4", price: "-125", suspended: true, market: 'Spread' },
    { id: 3, line: "", price: "+145", suspended: false, market: 'Money Line' },
    { id: 4, line: "", price: "-215", suspended: true, market: 'Money Line' },
    { id: 5, line: "O 51", price: "-120", suspended: false, market: 'Total Points' },
    { id: 6, line: "U 51", price: "-120", suspended: false, market: 'Total Points' },
  ].filter((sel) => sel.market === market); 

  return (
    <div className="selection-view column">
      {selections.map((selection) => (
        <Selection key={selection.id} {...selection} />
      ))}
    </div>
  );
};
