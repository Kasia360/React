import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
//import { Draggable } from 'react-beautiful-dnd';


const Card = ({ title/*, id, index*/ }) => {
  return (
    /*
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        */
    <article className={styles.component} >
      {/*
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          */}

      {title}
    </article>
  /*
    </Draggable>
    */
  );
};

Card.propTypes = {
  title: PropTypes.node,
  //id: PropTypes.string,
  //index: PropTypes.number,
};
Card.defaultProps = {
  title: 'Title',
};

export default Card;
