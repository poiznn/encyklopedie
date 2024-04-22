import PropTypes from 'prop-types';

function PlanetList({ planets, onPlanetClick }) {
    PlanetList.propTypes = {
        planets: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
        onPlanetClick: PropTypes.func.isRequired,
    };

    return (
        <ul>
            {planets.map((planet) => (
                <li key={planet.name} onClick={() => onPlanetClick(planet)}>
                    {planet.name}
                </li>
            ))}
        </ul>
    );
}

export default PlanetList;
