import React from 'react';
import Message from './Message'
import Summary from './Summary'
import ReactDom from 'react-dom'

let names = ["Achuth", "Chenna", "Ranga"];

let reverseNames = () => {
  names.reverse();
  ReactDom.render(<App />, document.getElementById('root'))
}

let promote = (name) => {
  names = [name, ...names.filter(x => x!==name)]
  ReactDom.render(<App />, document.getElementById('root'))
}

const App = () => <div>
  <h4 className="bg-secondary text-center text-white p-4">
    This is a Parent Component
  </h4>
  <Message name="Achuth" greeting="GoodMoring"></Message>
  <Message name="Bond" greeting={"Let's " + " Save the Wor"} ></Message>
  <Message name="Chenna" greeting="How are u?"></Message>
  <table className="table table-striped table-responsive-lg">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Letters</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {names.map((name, index) =>
        <tr key={name}>
          <Summary index={index} name={name}
            reverseNamesCallback={reverseNames}
            promoteCallback={promote}
          ></Summary>
        </tr>
      )}
    </tbody>

  </table>

</div>

export default App;