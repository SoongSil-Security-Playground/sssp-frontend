import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileForm() {
    const navigate = useNavigate();

    const handleChangePasswordClick = () => {
        navigate('/mypage/change-password');
    };

    return (
        <div style={pageContainerStyle}>
            <style>{placeholderStyle}</style>
            <div style={profileContainerStyle}>
                <div style={profileIconStyle}></div>
            </div>
            <form style={formContainerStyle}>
                <div style={formFieldStyle}>
                    <label style={labelStyle}>Name</label>
                    <input 
                        type="text" 
                        placeholder="Kim Soongsil" 
                        style={{ ...inputStyle, ':focus': inputFocusStyle }} 
                    />
                </div>
                <div style={formFieldStyle}>
                    <label style={labelStyle}>Email</label>
                    <input 
                        type="email" 
                        placeholder="example@soongsil.ac.kr" 
                        style={{ ...inputStyle, ':focus': inputFocusStyle }} 
                    />
                </div>
                <div style={formFieldStyle}>
                    <label style={labelStyle}>Contents</label>
                    <textarea 
                        placeholder="hello world" 
                        style={{ ...textareaStyle, ':focus': inputFocusStyle }} 
                    ></textarea>
                </div>
                <div style={buttonContainerStyle}>
                    <button style={saveButtonStyle}>save</button>
                    <button style={changePasswordButtonStyle} onClick={handleChangePasswordClick}>change password →</button>
                </div>
            </form>
        </div>
    );
}

const pageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '430px',
    margin: '0 auto',
    boxSizing: 'border-box',
    border: '1px solid lightgrey',
    borderRadius: '8px',
    padding: '30px',
};

const profileContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
};

const profileIconStyle = {
    height: '60px',
    width: '60px',
    borderRadius: '50%',
    backgroundColor: 'var(--sky-blue)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    color: '#9CA3AF',
};

const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '15px',
};

const formFieldStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const labelStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'var(--dark-blue)',
    marginBottom: '5px',
    textAlign: 'left',
};

const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #D1D5DB',
    backgroundColor: 'white',
    outline: 'none',
    transition: 'border-color 0.2s ease',
};

const inputFocusStyle = {
    borderColor: 'var(--dark-blue)',
};

const placeholderStyle = `
  input::placeholder, textarea::placeholder {
    color: var(--dark-blue);
  }
`;

const textareaStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #D1D5DB',
    backgroundColor: 'white',
    outline: 'none',
    minHeight: '80px',
    resize: 'none',
};

const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-start',
    marginTop: '20px',
};

const saveButtonStyle = {
    backgroundColor: 'var(--dark-blue)',
    color: 'white',
    fontWeight: 'bold',
    marginRight: '15px',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
};

const changePasswordButtonStyle = {
    backgroundColor: 'white',
    color: 'var(--dark-blue)',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '8px',
    border: '1px solid var(--dark-blue)',
    cursor: 'pointer',
};

export default ProfileForm;
