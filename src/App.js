import React from "react"
import { connect } from "react-redux"
import CardList from "./components/card-list/CardList"
import SearchBar from "./components/search-bar/search-bar"
import Count from "./components/count/Count"

class App extends React.Component {
  state = {
    searchTerm: "",
  }

  componentDidMount() {
    this.props.loadMonsters()
  }

  onChange = (event) => {
    const value = event.target.value
    this.setState({ searchTerm: value })
  }

  render() {
    const { searchTerm } = this.state
    const monsters = this.props.monsters.data

    const filteredMonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchTerm)
    )

    const loading = <div>Loading....</div>
    const content = <CardList monsters={filteredMonsters} />

    return (
      <div>
        <Count />
        <SearchBar value={searchTerm} onChange={this.onChange} />
        {this.props.monsters.loading ? loading : content}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    monsters: state.monsters,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadMonsters: () => dispatch({ type: "LOAD_MONSTERS_REQUEST" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
