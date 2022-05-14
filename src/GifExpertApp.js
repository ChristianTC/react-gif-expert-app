import React, {useState} from 'react'

export const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai', 'Dragon Ball']
  const [categories, setCategories] = useState(['One Punch', 'Samurai', 'Dragon Ball'])

  const handleAdd = () => {
    setCategories([...categories, 'HunterXHunter'])
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={ handleAdd }>Add</button>

      <ol>
        {
          categories.map( category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  )
}
