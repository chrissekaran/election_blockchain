import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.props.castVote(this.candidateId.value)
      }}>
        <div>
          <label>Select Candidate</label>
          <select ref={(input) => this.candidateId = input}>
            {this.props.candidates.map((candidate, i) => {
              return <option value={candidate.id}>{candidate.name}</option>
            })}
          </select>
        </div>
        <button type='submit'>Vote</button>
        <hr/>
      </form>
    )
  }
}

export default Form
