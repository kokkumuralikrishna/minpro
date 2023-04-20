/* import React, { Component } from 'react'
import { db } from './container/firebaseConfig'
import firebase from 'firebase/compat/app'
import { useState } from 'react'
import app from './container/firebaseConfig'

export default class Todo extends Component {
  constructor() {
    super()
    this.state = {
      newValue: ""
    }
    this.store=this.store.bind(this)
  }

  async store() {

  console.log("from store")
    console.log(this.state.newValue)
    let newDate = firebase.firestore.Timestamp.now()
    console.log("time", firebase.firestore.Timestamp.now())
    const response =await db.collection("time").add({
    date: newDate,
    todoMsg: this.state.newValue
  })
    console.log(response)
    this.setState({
    newValue: ""
  })
}
render() {
  return (
    <div>
      <input placeholder='add some data'
        value={this.state.newValue}
        onChange={(e) => this.setState({ newValue: e.target.value })}></input>
      <button onClick={this.store}>Submit</button>
    </div>
  )
}
}*/

import React from 'react'
import { db } from './container/firebaseConfig'
import firebase from 'firebase/compat/app'
import { useState } from 'react'

export default function Todo() {
  const [newValue, setNewValue] = useState("")
  async function store() {
    let newDate = firebase.firestore.Timestamp.now()
    const response = await db.collection("time").add({
      date: newDate,
      todomsg: newValue
    })
    console.log(response)
    setNewValue("")
  }
  return (
    <div>
      <input placeholder='add some data'
        value={newValue}
        onChange={(e) => this.setState({ newValue: e.target.value })}></input>
      <button onClick={store}>Submit</button>
    </div>
  )
}
