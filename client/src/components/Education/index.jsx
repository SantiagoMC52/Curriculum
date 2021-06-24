import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadData from '../../redux/actions/actionsCreator';

function Education({ details, dispatch }) {
  useEffect(() => {
    if (!details.length) dispatch(loadData());
  }, []);

  return (
    <div className="container">
      <div className="container__title">
        <h3>Education</h3>
      </div>
      {
          details.map((detail) => detail.studies.map((study) => (
            <div className="container__details">
              <p>{study.schoolName}</p>
              <p>{`Since: ${study.startDate}`}</p>
              <p>{`To: ${study.endDate}`}</p>
              <span className="container__deco" />
            </div>
          )))
        }

    </div>
  );
}

Education.propTypes = {
  map: PropTypes.func.isRequired,
  details: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ details }) {
  return { details };
}

export default connect(mapStateToProps)(Education);
