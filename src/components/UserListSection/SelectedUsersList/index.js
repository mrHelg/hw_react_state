import React from 'react';

const SelectedUsersList = (props) => {
  const { users } = props;
  const selectedUsers = users.filter((user) => user.isSelected);
  console.log(selectedUsers);
  return (
    <div>
      <span>
        <b>Selected users: </b>
      </span>
      {selectedUsers.length
        ? selectedUsers.map(({ id, fname }) => {
            return <span key={id}>{fname} </span>;
          })
        : 'none'}
    </div>
  );
};

export default SelectedUsersList;
