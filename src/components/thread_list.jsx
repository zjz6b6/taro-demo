import React from "react"
import Loading from "@/components/loading";
import { View, Text } from "@tarojs/components"

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

