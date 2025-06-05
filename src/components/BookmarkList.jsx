import React from 'react';
import BookmarkItem from './BookmarkItem';

const BookmarkList = ({ bookmarks, onRemove }) => {
  return (
    <div className="bookmark-list">
      <h3>Bookmarked Cities</h3>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        bookmarks.map((city) => (
          <BookmarkItem key={city.id} city={city} onRemove={onRemove} />
        ))
      )}
    </div>
  );
};

export default BookmarkList;
