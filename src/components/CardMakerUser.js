import React from 'react';
import axios from 'axios';
import styled from 'styled-components';



const UserDiv = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #48e0db;
    border-radius: 10px;
`

const UserImg = styled.img`
    width: 200px;
    border-radius: 20px;
`

const UserSpan = styled.span`
    margin: 5%;
`


export default class CardMakerUser extends React.Component {

    render() {

        if (!this.props.userData) {return null}
        return (
            <UserDiv>
                <h3>{this.props.userData.name}</h3>
                <UserImg alt="user" src={this.props.userData.avatar_url}/>
                <UserSpan>{this.props.userData.bio}</UserSpan>
                <p>Login: {this.props.userData.login}</p>
                <p>{this.props.userData.followers} followers</p>
                <p></p>
            </UserDiv>
        )
    }
}