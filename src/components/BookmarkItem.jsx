import React from 'react';

const BookmarkItem = ({ city, onRemove }) => {
  return (
    <div className="bookmark-item">
      <span>{city.name}, {city.sys.country}</span>
      <button onClick={() => onRemove(city.id)}>Remove</button>
    </div>
  );
};

export default BookmarkItem;
