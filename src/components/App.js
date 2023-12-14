import React from 'react'
import Entry from './Entry'

// Import the generated emojipedia array
import emojipediaArray from './generateEmojiEntry' // Adjust the path accordingly

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className='dictionary'>
        {emojipediaArray.map((emojiEntry) => (
          <Entry
            key={emojiEntry.id}
            emoji={emojiEntry.emoji}
            name={emojiEntry.name}
            meaning={emojiEntry.meaning}
          />
        ))}
      </dl>
    </div>
  )
}

export default App
