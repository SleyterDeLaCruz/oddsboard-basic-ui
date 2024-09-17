export interface HeaderProps {
  title: string;
  keyMarkets: string[];
}
export const Header = ({ title = "Oddsboard", keyMarkets }: HeaderProps) => {
  return (
    <header>
      <div>
        <h1><img src="//oddsboards-basic-ui/assetslogo.svg" className="logo" alt="FBG" />{title}</h1>
        <img src="//oddsboards-basic-ui/assetslogo-tertiary.svg" className="logo" alt="FBG" />
      </div>
      <div>
        {keyMarkets?.map((market) => (
          <h4 key={`keymarket-${market}`}>{market}</h4>
        ))}
      </div>
    </header>
  );
};
