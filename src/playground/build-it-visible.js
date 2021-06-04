class VisibilityApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>The DEETS.</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityApp />, document.getElementById('app'));

// let visibility = false;

// const showDetails = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const toggleApp = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showDetails}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>These are the deets.</p>
//         </div>
//       )}
//     </div>
//   );
  
//   ReactDOM.render(toggleApp, document.getElementById('app'));
// }

// render();