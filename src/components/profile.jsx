import React, { useState, useEffect } from 'react';
import '../App.css'
import axios from 'axios';



export default function Profile ({ username, darkMode }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get(`https://api.github.com/users/${username}`, {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
              },
            });
    
            setUserData(response.data);
          } catch (error) {
            console.error('Error fetching GitHub profile data:', error);
          }
        };
    
        if (username) {
            fetchUserData();
        }
      }, [username]);
    
    return(
        <>
        { userData && (
            <div className={`profile ${darkMode ? 'dark-mode' : ''}`}>
                    <div className="profile-div">
                        <img src={userData.avatar_url} className="profile-image"/>
                        <div className="mobile">
                        <h2>{userData.name} </h2>
                                <span className="blue-mobile">@{userData.login}</span>
                                <div className="date-joined-mobile">
                                    <span>Joined {new Date(userData.created_at).toLocaleDateString()}</span>
                                </div>
                        </div>
                    </div>
                    <div className="details-section">
                            <div className="details">
                                <div className="profile-details">
                                <h2>{userData.name} </h2>
                                <span className="blue">@{userData.login}</span>
                                <span className="bio-description">{userData.bio}</span>
                                </div>
                                <div className="date-joined">
                                    <span>Joined {new Date(userData.created_at).toLocaleDateString()}</span>
                                </div>
                        </div>

                        <div className="stats">
                            <div className="stats-item">
                                <span>Repos</span>
                                <h2>{userData.public_repos}</h2>
                            </div>
                            <div className="stats-item">
                                <span>Followers</span>
                                <h2>{userData.followers}</h2>
                            </div>
                            <div className="stats-item">
                                <span>Following</span>
                                <h2>{userData.following}</h2>
                            </div>
                        </div>

                        <div className="contact">
                            <div className="contact-item">
                            <img src="./src/assets/pin.png" className="contact-image"/>
                                <span>{userData.location}</span>
                            </div>
                            <div className="contact-item twitter">
                                <img src="./src/assets/twitter.png" className="contact-image"/>
                                <span>{userData.twitter ? userData.twitter : 'Not Available'}</span>
                            </div>
                            <div className="contact-item">
                                <img src="./src/assets/url.png" className="contact-image"/>
                                <span>{userData.blog}</span>
                            </div>
                            <div className="contact-item">
                                <img src="./src/assets/office.png" className="contact-image"/>
                                <span>@{userData.login}</span>
                            </div>
                        </div>
                    </div>
                
            </div>
    )}
        </>
    );
}