import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  // const {name, children} = props
  return (
    <div>
      ëì ìë¡­ê³  ë©ì§, {name} ì»´í¬ëí¸ìëë¤. <br />
      ê·¸ë¦¬ê³  childrenì {children}ì´ë¤. <br />
      ëì favoriteNumberë {favoriteNumber}ì´ë¤.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "(ì§ì ëì§ ìì)",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
