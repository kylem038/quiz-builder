import React from 'react';

const Answer = (props) => {
  const { id, title } = props;
  return (
    <div>
      <label>
        <input type='radio' name={id} />
        {title}
      </label>
    </div>
  );
};

export default Answer;
