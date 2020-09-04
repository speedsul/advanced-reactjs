import React, { useEffect, useState } from 'react'
const Twitter = () => {
  const [tweet, setTweet] = useState(false)
  // componentDidMount
  useEffect(() => {
    setTimeout(() => {
      console.log('teste')
    }, 5000)
  }, [])
  // componentDidUpdate
  useEffect(() => {
    setTimeout(() => {
      console.log('tes 2')
    }, 5000)
  }, [tweet])
  // componentUnmount
  useEffect(() => {
    return console.log('Componet WillUmmont')
  }, [])

  const postTweet = () => {
    setTweet(!tweet)
  }

  return (
    <>
      <div className='home'>
        <span>Home Tweet</span>
        {tweet ? ' Sem postagem' : ' Com postagem'}
        <button onClick={postTweet}>Teste</button>
      </div>
    </>
  )
}

export default Twitter
