import React, { useState } from 'react';
import NavigationBar from '../components/navigationBar';
import ChallengeCard from '../components/challengeCard';
import FilterSidebar from '../components/FilterSidebar';
import Footer from '../components/footer';

function ChallengesPage({ isLoggedIn, toggleLogin }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedState, setSelectedState] = useState("All");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleStateSelect = (state) => {
        setSelectedState(state);
    };

    return (
        <div style={mainContainerStyle}>
            <NavigationBar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
            <div style={titleContainerStyle}>
                <h1 style={headerTextStyle}>Challenges</h1>
            </div>
            <div style={contentWrapperStyle}>
                <FilterSidebar 
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleCategorySelect}
                    selectedState={selectedState}
                    onSelectState={handleStateSelect}
                />
                <div style={contentContainerStyle}>
                    <ChallengeCard 
                        title="Unsolved Challenge"
                        description="This challenge has not been solved."
                        connection="server address is here."
                        tag="Pwn"
                        isSolved={false}
                    />
                    <ChallengeCard 
                        title="Solved Challenge"
                        description="This challenge has been solved."
                        connection="server address is here."
                        tag="Misc"
                        isSolved={true}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    margin: 0,
    paddingTop: '60px',
};

const titleContainerStyle = {
    marginTop: '50px',
    marginBottom: '30px',
    width: '100%',
    textAlign: 'center',
    padding: '20px 0',
};

const headerTextStyle = {
    color: 'var(--dark-blue)',
    marginBottom: '2px',
};

const contentWrapperStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
};

const contentContainerStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
};

export default ChallengesPage;