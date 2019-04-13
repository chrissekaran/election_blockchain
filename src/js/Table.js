import React from 'react'

class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {this.props.candidates.map((candidate, i) => {
            return(
              <tr key={i}>
                <td>{candidate.id.toNumber()}</td>
                <td>{candidate.name}</td>
                <td>{candidate.voteCount.toNumber()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Table
