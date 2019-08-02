import React, { Component } from 'react';
import Blocks from 'my-app-block';
import './App.css';
import tip from './images/tip.png'
import list from './images/list.png' 
import desert from './images/desert.png'

class App extends Component {
  render() {
      return ( 
        <Blocks 
          TipImage={tip} 
          TipTitle={'When to go'} 
          TipInfo={'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it'} 
          ListImage={list} 
          ListTitle={'Desert experiences'} 
          ListButtonText={'Read more'} 
          ListButtonUrl={'https://google.com'} 
          ArticleImage={desert}
          ArticleTitle={'Eight reasons to set your sights on Sharjah'}
          ArticleInfo={'long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'}
          ArticleLinkText={'READ MORE'}
          ArticleLinkUrl={'https://google.com'}
           />
       )
  }
}


export default App;
