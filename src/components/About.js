import React from 'react';
import { Helmet } from 'react-helmet';

export default function About(props) {
  return (
    <>
    <Helmet>
        <title>TextUtils | About</title>
      </Helmet>
    
      {/* #042743 */}


  <div className="px-4 py-3 my-2 " style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
    <h1 className="text-center ">About TextUtils</h1>
    <div className="col mx-auto">
      <p className="lead mb-4 text-center">In this page we describe a bit of the history, motivations and features behind Text-Utils.com.</p>
      <hr />

<div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>

<h2>Why we  creted it?</h2>
<p> Text-Utils.com was born in 2014 as part of a learning exercise to practice our programming skills. In almost 10 years of existence, we continue to refactor, redesign, improve, and implement new features. And we could say that we learned a lot since we started, by including the experience here and in the overall development world. As long our spirit allows us to continue learning and coding, we will continue improving this website.</p>

<h2>What does it do?</h2>
<p>Text-Utils.com is described as a central repository of tools for helping with developer activities. It includes tools such as for formatting JSON, XML, HTML, CSS, JavaScript, multiple text tools such as to convert case, remove accents, line breaks, extra space, also regular expressions tools for extracting elements from text such as IPs and e-mail addresses. And this is actually only a subset of what we have.</p> 

<h2>Why is it different?</h2>
<p> Fast, secure and easy. This is a summary of what Text-Utils.com is. All we design is intended to be fast, really fast. Other than that, all our utilities are client-side, meaning your data will not go through our servers to be processed. Your data is secure. Finally, Text-Utils.com is also quite easy. Everything can be found on the page very quickly, in just a few clicks.</p>
</div>
    </div>
  </div>

  
</>
  )
}
