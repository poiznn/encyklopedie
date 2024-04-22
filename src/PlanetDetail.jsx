import PropTypes from 'prop-types';

function PlanetDetail({ planet }) {
    PlanetDetail.propTypes = {
        planet: PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }).isRequired,
    };

    return (
        <div className={"box"}>
            <h2>{planet.name}</h2>
            <img src={planet.image} alt={planet.name} className={"image-size"} />
            <p>{planet.description}</p>
        </div>
    );
}

export default PlanetDetail;
