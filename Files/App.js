import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsApp from './components/NewsApp';
import {
    
    Routes,
    Route,
  } from "react-router-dom";
export default class App extends Component {
    render() {
        return (
            <>
            <Navbar/>
            {/* <NewsApp  category={'general'} pageSize={8} country={'us'} /> */}
             <Routes>  

                    <Route path="*" element={<NewsApp key="general" category={'general'} pageSize={8} country={'ae'} />}/>
                    <Route path="/business" element={<NewsApp key="business"  category={'Business'} pageSize={8} country={'ae'} />} />
                    <Route path="/entertainment" element={<NewsApp key="entertainment"  category={'entertainment'} pageSize={8} country={'ae'} />} />
                    <Route path="/health" element={<NewsApp key="health"  category={'health'} pageSize={8} country={'ae'} />} />
                    <Route path="/science" element={<NewsApp key="science"  category={'science'} pageSize={8} country={'ae'} />}/> 
                    <Route path="/sports" element={<NewsApp key="sports"  category={'sports'} pageSize={8} country={'ae'} />}/> 
                    <Route path="/technology" element={<NewsApp key="technology"  category={'technology'} pageSize={8} country={'ae'} />} />
            </Routes> 
        
            </>
        )
    }
}
