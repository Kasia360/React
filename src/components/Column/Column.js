import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
//import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';


class Column extends React.Component {
/*  state = {
    cards: this.props.cards || [],
  } */
  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }
  static defaultProps = {
    title: 'Title',
  }
  /*  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
          },
        ],
      }
    ));
  } */
  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span>{title}
        </h3>
        {cards.map(cardsData => (
          <Card key={cardsData.id} {...cardsData} />
        ))}
        {/*
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} /> 
        */}
      </section>
    );
  }
}

export default Column;
