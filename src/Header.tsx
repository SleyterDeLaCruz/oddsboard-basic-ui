export interface HeaderProps {
  title: string;
  keyMarkets: string[];
}
export const Header = ({ title = "Oddsboard", keyMarkets }: HeaderProps) => {
  return (
    <header>
      <div>
        <h1><img src="/public/logo.svg" className="logo" alt="FBG" />{title}</h1>
        <img src="/public/assets/logo-tertiary.svg" className="logo" alt="FBG" />
      </div>
      <div>
        {keyMarkets?.map((market) => (
          <h4 key={`keymarket-${market}`}>{market}</h4>
        ))}
      </div>
    </header>
  );
};
