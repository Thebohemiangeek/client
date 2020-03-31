// @flow
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Image } from 'semantic-ui-react';

const DEFAULT_IMAGE = 'https://www.hotukdeals.com/assets/img/profile-placeholder_f56af.png';

const HorizontalCard = styled.article`
  width: 100%;
  margin-bottom: 1rem;

  .card {
    display: flex;
    flex-direction: row;
    width: 100%;

    & > .image {
      width: 10rem;
      border-radius: 0.28571429rem !important;
      height: 10rem;
      object-fit: contain;
      margin: 2rem;
    }

    & > .content {
      display: flex;
      flex-direction: column;

      .description {
        height: 100%;
      }

      .see-more {
        text-transform: uppercase;
        margin-top: 1rem;
      }
    }
  }
`;

function getClampedDescription(description) {
  const maxChars = 170;

  if (description.length <= maxChars) return description;

  return description
    .slice(0, maxChars)
    .split(' ')
    .slice(0, -1)
    .join(' ')
    .concat('…');
}

type GroupCardProps = {
  name: string,
  description: string,
  image: string,
  link: string
}

export const GroupCard = ({
  name,
  description,
  image,
  link,
}: GroupCardProps) => {
  const cardImage = image || DEFAULT_IMAGE;
  const clampedDescription = useMemo(() => getClampedDescription(description), [
    description,
  ]);
  return (
    <HorizontalCard key={name}>
      <Card as="div">
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{clampedDescription}</Card.Description>
          <Link className="see-more" to={link}>
            View group details
          </Link>
        </Card.Content>
        <Image src={cardImage} />
      </Card>
    </HorizontalCard>
  );
};

export default GroupCard;
