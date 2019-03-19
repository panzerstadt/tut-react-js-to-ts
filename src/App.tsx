import React, { Props } from 'react';
import LaunchListScreen from './screens/launchList';
import LaunchDetailsScreen from './screens/launchDetails';
import './styles.scss';

type MyProps = {};

type MyState = {
  selectedFlightNumber?: number | null;
};

class App extends React.Component<MyProps, MyState> {
  state = { selectedFlightNumber: null };

  setSelectedFlightNumber = (selectedFlightNumber: any) =>
    this.setState({ selectedFlightNumber });

  render() {
    const { selectedFlightNumber } = this.state;
    return (
      <div>
        <nav className="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden items-center">
          <div className="flex items-center">
            <ul className="text-sm text-grey-dark list-reset flex items-center">
              <li>
                <button
                  className="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline cursor-pointer"
                  onClick={() => this.setSelectedFlightNumber(null)}
                >
                  Mission
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {selectedFlightNumber ? (
          <LaunchDetailsScreen
            flightNumber={selectedFlightNumber}
            onClose={(event: React.MouseEvent): void =>
              this.setSelectedFlightNumber(null)
            }
          />
        ) : (
          <LaunchListScreen onSelectLaunch={this.setSelectedFlightNumber} />
        )}
      </div>
    );
  }
}

export default App;
