import React from 'react'
import styled from 'styled-components'

const FollowerDiv = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000;
    border-radius: 10px;
    margin-top: 10px;
    color: white;
`

const FollowImg = styled.img`
    width: 200px;
    border-radius: 20px;
`


export default class CardMakerUser extends React.Component {

    render() {

        if (!this.props.followerData) {return null}
        return (
            <FollowerDiv>
                <h3>{this.props.followerData.name}</h3>
                <FollowImg alt="user" src={this.props.followerData.avatar_url}/>
                <span>{this.props.followerData.bio}</span>
                <p>Login: {this.props.followerData.login}</p>
                <p>URL: {this.props.followerData.url}</p>
                <p></p>
            </FollowerDiv>
        )
    }
}