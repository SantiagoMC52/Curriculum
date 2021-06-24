import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadData from '../../redux/actions/actionsCreator';

function Experience({ details, dispatch }) {
  useEffect(() => {
    if (!details.length) dispatch(loadData());
  }, []);

  return (
    <div className="container">
      <div className="container__title">
        <h3>Experience</h3>
      </div>
      {
          details.map((detail) => detail.experience.map((work) => (
            <div className="container__details">
              <p>{work.businessName}</p>
              <p>{`Sice: ${work.startDate}`}</p>
              <p>{`To: ${work.endDate}`}</p>
              <p>{work.description}</p>
              <span className="container__deco" />
            </div>
          )))
        }
    </div>
  );
}

Experience.propTypes = {
  map: PropTypes.func.isRequired,
  details: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ details }) {
  return { details };
}

export default connect(mapStateToProps)(Experience);
