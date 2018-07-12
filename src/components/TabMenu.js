import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

class TabMenu extends React.Component {
  clicked (view) {
    this.props.dispatch({ type: 'SET_VIEW', view });
  }

  render () {
    const { buttons, view } = this.props;

    return (
      <div className="TabMenu">
        <div className="menuContainer">
          { buttons.map(button => (<a
            href="#"
            key={v4()}
            draggable="false"
            className={view === button ? 'TabMenuItem selected' : 'TabMenuItem'}
            onClick={() => this.clicked(button)}
          >{button}</a>)) }
        </div>
      </div>
    );
  }
}

export default connect(({ view }) => ({ view }))(TabMenu);
