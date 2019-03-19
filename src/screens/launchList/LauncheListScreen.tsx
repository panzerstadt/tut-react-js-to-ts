import React, { ReactNode } from 'react';
import LauncheList from './LauncheList';
import { allLaunches, upcomingLaunches, pastLaunches } from '../../data';
import StatsBar from './StatsBar';
import Tabs from './Tabs';
import { Launch, Tab } from '../../types.js';

const tabs = ['All', 'Past', 'Upcoming'];

type MyProps = {
  onSelectLaunch: Function;
};

type MyState = {
  selectedTab: string;
  filterText: string;
};

const getLaunchesForTab: (tab: Tab) => Launch[] = tab => {
  switch (tab) {
    case 'All':
      return allLaunches;
    case 'Past':
      return pastLaunches;
    case 'Upcoming':
      return upcomingLaunches;
    default:
      return allLaunches;
  }
};

class Home extends React.Component<MyProps, MyState> {
  state = { selectedTab: 'All', filterText: '' };

  setSelectedTab = (selectedTab: string) => this.setState({ selectedTab });
  setFilterText = (filterText: string) => this.setState({ filterText });

  getfilteredLaunches = () => {
    const { selectedTab, filterText } = this.state;
    return getLaunchesForTab(selectedTab as Tab).filter(launch =>
      launch.mission_name.toLowerCase().includes(filterText.toLowerCase()),
    );
  };

  render() {
    const { selectedTab, filterText } = this.state;
    return (
      <div>
        <StatsBar launches={allLaunches} />
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={this.setSelectedTab}
          filterText={filterText}
          onFilterTextChange={this.setFilterText}
        />
        <LauncheList
          launches={this.getfilteredLaunches()}
          onSelectLaunch={this.props.onSelectLaunch}
        />
      </div>
    );
  }
}

export default Home;
