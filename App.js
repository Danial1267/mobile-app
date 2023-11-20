import { StatusBar, Text, View, Image, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import React from 'react';


const Post = styled.View` 
  border-bottom-width: 1px;
  border-bottom-color: rgba(0,0,0,0.1);
  border-bottom-style: solid;
  width: 45%;
  background-color: purple;  


`;

const PostImage = styled.Image`
  width: 150px;
  height: 140px;
  border-radius: 20px;
  padding: 60px;
  margin: 10px auto auto;
  
  
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
  margin-top: 20px;
  padding-left: 10px;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
  padding-left: 10px;

`;

const PostDetails = styled.View``;


const Container = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 10px;
`;




export default function App() {
  return (
    <SafeAreaView>
    <Container>
    <Post>
        <PostImage source={{uri: 'https://images.iptv.rt.ru/sdp/ct/imp_stv717756427.jpg'}}/>
        <PostDetails>
          <PostTitle>Статья</PostTitle>
          <PostDate>07.03.23</PostDate>
        </PostDetails>
      </Post>
    <Post>
        <PostImage source={{uri: 'https://images.iptv.rt.ru/sdp/ct/imp_stv717756427.jpg'}}/>
        <PostDetails>
          <PostTitle>Статья</PostTitle>
          <PostDate>07.03.23</PostDate>
        </PostDetails>
      </Post>
      <Post>
        <PostImage source={{uri: 'https://images.iptv.rt.ru/sdp/ct/imp_stv717756427.jpg'}}/>
        <PostDetails>
          <PostTitle>Статья</PostTitle>
          <PostDate>07.03.23</PostDate>
        </PostDetails>
      </Post>
      <Post>
        <PostImage source={{uri: 'https://images.iptv.rt.ru/sdp/ct/imp_stv717756427.jpg'}}/>
        <PostDetails>
          <PostTitle>Статья</PostTitle>
          <PostDate>07.03.23</PostDate>
        </PostDetails>
      </Post>
      <StatusBar barStyle = "dark-content" />
    </Container>
    </SafeAreaView>
  );
}


