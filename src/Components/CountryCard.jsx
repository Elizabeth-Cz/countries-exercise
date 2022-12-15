const CountryCard = ({ props }) => {
  return (
    <div className="country-card">
      <img src={props.flag.large} alt="flag" />
      <h3>{props.name}</h3>
      <p>Population: {props.population}</p>
      <p>Region: {props.region}</p>
      <p>Capital: {props.capital}</p>
    </div>
  );
};

export default CountryCard;
