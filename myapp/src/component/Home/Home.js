
import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';


class Home extends React.Component {

    render() {

        return (
            <div>
                <Search />
                <QuickSearch />
            </div>
        )

    }
}

export default Home;
