import React from 'react'

class ThreadList extends React.Component {
  static defaultProps = {
    threads: [],
    loading: true
  }

  render() {
    const {loading, threads} = this.props

    if (loading) {
      return <Loading />
    }
  }
}

