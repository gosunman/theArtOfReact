import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  // const {name, children} = props
  return (
    <div>
      나의 새롭고 멋진, {name} 컴포넌트입니다. <br />
      그리고 children은 {children}이다. <br />
      나의 favoriteNumber는 {favoriteNumber}이다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "(지정되지 않음)",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
