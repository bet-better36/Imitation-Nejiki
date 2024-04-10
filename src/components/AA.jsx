import React, { useRef, useState } from 'react'

function AA() {
  const mailref = useRef()
  const [mail, setMail] = useState(mailref)
  const submit = (e) => {
    e.preventDefault()
    setMail(e.target.value)

    console.log(
      {
        mail:mailref.current.value
      }
    )
  }
  return (
    <div>
      <form action="" onSubmit={submit}>
        <div className="">
          <label htmlFor="mail">メールアドレス</label>
          <input type="mail" id="mail" ref={mailref} />
        </div>
      <button type="submit" > 3421</button>
      </form>
      <div className="" >{}</div>
    </div>
  )
}

export default AA
