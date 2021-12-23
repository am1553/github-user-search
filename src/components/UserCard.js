import React, { useState, useEffect } from 'react'
import searchIcon from '../assets/icon-search.svg'
import companyIcon from '../assets/icon-company.svg'
import locationIcon from '../assets/icon-location.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import websiteIcon from '../assets/icon-website.svg'


function UserCard() {

    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [login, setLogin] = useState('');
    const [joinDate, setJoinDate] = useState('');
    const [bio, setBio] = useState('');
    const [publicRepo, setPublicRepo] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [location, setLocation] = useState('');
    const [twitter, setTwitter] = useState('');
    const [blog, setBlog] = useState('');
    const [company, setCompany] = useState('');

    const onlyDate = new Date(joinDate).toDateString();

    useEffect(()=> {
        fetch("https://api.github.com/users/" + 'am1553')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, [])

    const setData = ({ name, avatar_url, login, created_at, bio, public_repos, followers, following, location, twitter_username, blog, company}) => {
        setName(name)
        setAvatar(avatar_url)
        setLogin(login)
        setJoinDate(created_at)
        setBio(bio)
        setPublicRepo(public_repos)
        setFollowers(followers)
        setFollowing(following)
        setLocation(location)
        setTwitter(twitter_username)
        setBlog(blog.startsWith('w') ? `https://${blog}` : blog)
        setCompany(company)
    }


    function handleSearch(e) {
        setUser(e.target.value)
    }

    function searchUser() {
        fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }


    return (

        <div className="github">

            <div className='searchbar-component'>
                <div className="search-container">
                    <img src={searchIcon} alt="" className='search-icon'/>

                    <input type="text" 
                        placeholder='Search Github username...' 
                        className='search-input' 
                        id='search-inp'
                        onChange={handleSearch} 
                    />

                    <button className='search-button' id='search-btn'onClick={searchUser}>Search</button>
                </div>
            </div>

            <div className='usercard-component'>

                <div className="user-overview">
                    <img src={avatar} alt="user avatar" />
                    <div className="info-wrapper">
                        <h1 className="user-name">{name}</h1>
                        <div className="user-login">@{login}</div>
                        <div className="user-join-date">{onlyDate}</div>
                    </div>
                </div>

                <div className="bio-info">
                    <p>{bio === null ? 'This user has no bio' : bio}</p>
                </div>

                <div className="user-stats">
                    <div className="user-repo">
                        <span className='stats-text'>Repos</span>
                        <h2>{publicRepo}</h2>
                    </div>
                    <div className="user-followers">
                        <span className='stats-text'>Followers</span>
                        <h2>{followers}</h2>
                    </div>
                    <div className="user-following">
                        <span className='stats-text'>Following</span>
                        <h2>{following}</h2>
                    </div>
                </div>

                <div className="user-info">

                    <div className="user-location">
                        <img src={locationIcon} alt="" />
                        <span>
                            {location === null ? 'Not Available' : location}
                        </span>
                    </div>
                    
                    <div className="user-blog">
                        <img src={websiteIcon} alt="" />
                        <a href={blog} target='_blank'>{blog === null ? 'Not Available' : blog}</a>
                    </div>

                    <div className="user-twitter">
                        <img src={twitterIcon} alt="" />
                        <a href={twitter} target='_blank'>{twitter === null ? 'Not Available' : twitter}</a>
                    </div>

                    <div className="user-company">
                        <img src={companyIcon} alt="" />
                        <a>{company === null ? 'Not Available' : company}</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserCard
