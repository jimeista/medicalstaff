import React, { Component, createRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { List, AutoSizer } from 'react-virtualized'

const listStyle = { overflowX: false, overflowY: false }
const rowStyle = {
  overflow: 'hidden',
  height: '100%',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  lineHeight: '25px',
  textAlign: 'left',
}

class ScrollList extends Component {
  list = createRef()

  handleScroll = (e) => {
    const { scrollTop, scrollLeft } = e.target
    const { Grid } = this.list.current
    Grid.handleScrollEvent({ scrollTop, scrollLeft })
  }

  renderRow = ({ index, key, isScrolling, style }) => {
    const { organisations } = this.props
    return (
      <div key={key} style={style}>
        <div style={rowStyle}>
          {organisations[index].code} - {organisations[index].name}
        </div>
      </div>
    )
  }

  render() {
    const { organisations } = this.props

    return (
      <div style={{ width: 200, height: 200 }}>
        <AutoSizer>
          {({ height, width }) => (
            <Scrollbars
              onScroll={this.handleScroll}
              style={{ height, width }}
              autoHide
            >
              <List
                height={height}
                width={width}
                rowHeight={25}
                rowRenderer={this.renderRow}
                style={listStyle}
                ref={this.list}
                rowCount={organisations.length}
              />
            </Scrollbars>
          )}
        </AutoSizer>
      </div>
    )
  }
}

export default ScrollList
