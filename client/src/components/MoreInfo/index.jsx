import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadData from '../../redux/actions/actionsCreator';

function Moreinfo({ details, dispatch }) {
  useEffect(() => {
    if (!details.length) dispatch(loadData());
  }, []);

  return (
    <>
      <div className="container">
        <div className="container__title">
          <h3>Languages</h3>
        </div>
        {
          details.map((detail) => detail.languages.map((language) => (
            <div className="container__details">
              <p>{`Name: ${language.name}`}</p>
              <p>{`Level: ${language.level}`}</p>
              <span className="container__deco" />
            </div>
          )))
        }
      </div>

      <div className="container">
        <div className="container__title">
          <h3>Follow me in:</h3>
        </div>
        {
          details.map(((detail) => (
            <>
              <div className="container__details">
                <a href={detail.socialMedia.linkedin} target="_blank" rel="noreferrer">Linkedin</a>
                <span className="container__deco" />
                <a href={detail.socialMedia.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </>
          )))
        }
      </div>
    </>
  );
}

Moreinfo.propTypes = {
  map: PropTypes.func.isRequired,
  details: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ details }) {
  return { details };
}

export default connect(mapStateToProps)(Moreinfo);
