import React , { useState } from "react";
import ChallengeInfoCard from "../components/ChallengeInfoCard";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";


function ChallengesSettingPage() {

    const [challenges, setChallenges] = useState([
        {id:1, title: "chall1", category: "pwn", tag: "none", state: "visible"},
        {id:2, title: "chall2", category: "web", tag: "none", state: "visible"},
        {id:3, title: "chall3", category: "crypto", tag: "none", state: "visible"},
        {id:4, title: "chall4", category: "rev", tag: "none", state: "visible"},
        {id:5, title: "chall5", category: "misc", tag: "none", state: "visible"},
        {id:6, title: "chall6", category: "pwn", tag: "none", state: "hidden"},
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleAdd = () => {
        navigate('/admin/challenges/add');
    }

    const handleEdit = (challengeId) => {
        const challengeToEdit = challenges.find(challenge => challenge.id === challengeId);
        navigate(`/admin/challenges/edit/${challengeId}`, { state: { challenge: challengeToEdit } });
    };

    const handleDelete = (challengeId) => {
        if (window.confirm("정말로 이 챌린지를 삭제하시겠습니까?")) {
            const updatedChallenges = challenges.filter(challenge => challenge.id !== challengeId);
            setChallenges(updatedChallenges);
        }
    };

    const filteredChallenges = challenges.filter(challenges => 
        (challenges.title && (challenges.title.toLowerCase().includes(searchTerm.toLowerCase()))) || 
        (challenges.category && (challenges.category.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    return (
        <div style={mainContainerStyle}>
            <div style={titleContainerStyle}>
                <h1 style={headerTextStyle}>Challenges</h1>
            </div>
            <div style={contentContainerStyle}>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <button style={addChallengeButtonStyle} onClick={handleAdd}>
                    +
                </button>
                {filteredChallenges.map(challenge => (
                    <ChallengeInfoCard
                        key={challenge.id}
                        title={challenge.title}
                        category={challenge.category}
                        tag={challenge.tag}
                        state={challenge.state}
                        onEdit={() => handleEdit(challenge.id)}
                        onDelete={() => handleDelete(challenge.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ChallengesSettingPage;

const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    margin: 0,
};

const titleContainerStyle = {
    marginTop: '12vh',
    textAlign: 'center',
    padding: '20px 0',
};

const headerTextStyle = {
    color: 'var(--dark-blue)',
    marginBottom: '2px',
};

const contentContainerStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '50vw',
};

const addChallengeButtonStyle = {
    display: 'flex',
    borderRadius: '16px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s',
    padding: '12px 20px',
    margin: '20px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'var(--dark-blue)',
    color: 'white',
    alignContent: 'center',
    width: '150px',
};