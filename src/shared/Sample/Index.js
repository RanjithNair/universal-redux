import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './Actions'
class Sample extends Component {
  // This will be called at server side to do the fetching and populating redux store
  static fetchData (store) {
    return store.dispatch(Actions.getSampleData())
  }
  async componentDidMount () {
    // check whether store already has data?
    if (!this.props.sampleData) {
      await this.props.actions.getSampleData()
    }
  }

  render () {
    return (
      <div>
        <h2>Sample Data</h2>
        <h3>{this.props.sampleData.name}</h3>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    sampleData: state.sample
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample)
