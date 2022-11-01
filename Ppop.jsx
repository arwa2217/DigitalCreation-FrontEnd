import React from 'react'

const Ppop = () => {
    const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

  return (
    <>
    <div>
      {names.filter(name => name.includes('J')).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
    </div>
 
    </>
  )
}

export default Ppop
