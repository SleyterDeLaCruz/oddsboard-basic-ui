import { SelectionView } from './SelectionView';

export interface MarketViewProps {
  keyMarkets: string[];
}

export const MarketView = ({ keyMarkets }: MarketViewProps) => {
  return (
    <div className="market-view">
      {keyMarkets.map((market) => (
        <SelectionView market={market} key={market} />
      ))}
    </div>
  );
};
