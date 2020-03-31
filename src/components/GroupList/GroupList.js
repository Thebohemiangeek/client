// @flow
import React, { useState } from 'react';
import { Card, Pagination } from 'semantic-ui-react';
import styled from 'styled-components';

import { GroupCard } from './components/GroupCard';

const ListWrap = styled.div`
  min-height: 465px;
  margin-bottom: '2rem';
`;

// TODO: Remove when data is paged by API
const chunk = (array, size) => {
  if (!array) return [];
  const firstChunk = array.slice(0, size); // create the first chunk of the given array
  if (!firstChunk.length) {
    return array; // this is the base case to terminal the recursive
  }
  return [firstChunk].concat(chunk(array.slice(size, array.length), size));
};

const GroupList = ({ groupList, getGroupURL }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 12;

  const pagedGroups = chunk(Object.values(groupList), PAGE_SIZE);

  return (
    <>
      <ListWrap>
        <Card.Group stackable itemsPerRow="4">
          {pagedGroups[currentPage - 1].map(({ name, description, logoUrl, id }) => (
              <GroupCard 
                key={id}
                name={name}
                description={description}
                link={getGroupURL(id)}
                image={logoUrl}
              />
            )
          )}
        </Card.Group>
      </ListWrap>

      {pagedGroups.length > 1 && (
        <Pagination
          defaultActivePage={currentPage}
          totalPages={pagedGroups.length}
          onPageChange={(e, { activePage }) => {
            setCurrentPage(activePage);
          }}
        />
      )}
    </>
  );
};

export default GroupList;
