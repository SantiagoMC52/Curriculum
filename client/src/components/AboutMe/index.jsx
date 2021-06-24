import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadData from '../../redux/actions/actionsCreator';
import './styles/style.css';

function DashBoard({ details, dispatch }) {
  useEffect(() => {
    if (!details.length) dispatch(loadData());
  }, []);

  return (
    <div className="container">
      <div className="container__title">
        <h3>About me</h3>
      </div>
      {
          details.map((detail) => (
            <div className="container__details">
              <span>{`Name: ${detail.name}`}</span>
              <span className="container__deco" />
              <span>{`Direction: ${detail.street}`}</span>
              <span className="container__deco" />
              <span>{`Number: ${detail.telf}`}</span>
              <span className="container__deco" />
              <span>{`Email: ${detail.email}`}</span>
              <span className="container__deco" />
              <span>{`Birth date: ${detail.birthDate}`}</span>
              <span className="container__deco" />
            </div>
          ))
        }
    </div>
  );
}

DashBoard.propTypes = {
  map: PropTypes.func.isRequired,
  details: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ details }) {
  return { details };
}

export default connect(mapStateToProps)(DashBoard);
