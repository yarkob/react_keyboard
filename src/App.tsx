import React from 'react';

interface State {
  key: string;
}

export class App extends React.Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    this.setState({ key: 'Nothing was pressed yet' });

    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: `The last pressed key is [${event.key}]` });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', () => {
      this.setState({ key: 'Nothing was pressed yet' });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.key}</p>
      </div>
    );
  }
}
