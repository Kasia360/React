import { connect } from 'react-redux';
import Column from './Column';
import { createAction_addCard, getCardsForColumn } from '../../redux/cardsRedux';



const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.id,
    listId: props.listId,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
