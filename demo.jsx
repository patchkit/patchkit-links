import React from 'react'
import * as Links from './index'
import users from 'patchkit-fixtures/users'

const msgId = '%MjdKnMFvD4Kgt04zNZFpo36FTsDomc2UE5gHrvsqeIM=.sha256'
const unknownUserId = '@sbfmaA2g/MgGYwSZqnlH8xNOnevTjWsbmelNnB706zA=.ed25519'
const blobId = '&/hEw0FIbP0XioJGQ5DZpWEbBNnlDsi2AqLhLfZ+icjM=.sha256'

export default class Links extends React.Component {
  render() {
    const userIds = Object.keys(users.profiles).concat([unknownUserId])
    return <div>
      <h1>patchkit-links</h1>
      <section className="links-msglink">
        <header>&lt;MsgLink id="..."&gt;</header>
        <div className="content"><Links.MsgLink id={msgId} /></div>
      </section>
      <section className="links-msglink-children">
        <header>&lt;MsgLink id="..."&gt;Message 1&lt;/MsgLink&gt;</header>
        <div className="content"><Links.MsgLink id={msgId}>Message 1</Links.MsgLink></div>
      </section>
      <section className="links-msglink-name">
        <header>&lt;MsgLink id="..." name="Message 2"&gt;</header>
        <div className="content"><Links.MsgLink id={msgId} name="Message 2" /></div>
      </section>
      <section className="links-bloblink">
        <header>&lt;BlobLink id="..."&gt;</header>
        <div className="content"><Links.BlobLink id={blobId} /></div>
      </section>
      <section className="links-bloblink-children">
        <header>&lt;BlobLink id="..."&gt;Blob 1&lt;/BlobLink&gt;</header>
        <div className="content"><Links.BlobLink id={blobId}>Blob 1</Links.BlobLink></div>
      </section>
      <section className="links-bloblink-name">
        <header>&lt;BlobLink id="..." name="Blob 2"&gt;</header>
        <div className="content"><Links.BlobLink id={blobId} name="Blob 2" /></div>
      </section>
      <section className="links-userlink">
        <header>&lt;UserLink id="..."&gt;</header>
        <div className="content"><Links.UserLink id={userIds[0]} /></div>
      </section>
      <section className="links-userlink-override">
        <header>&lt;UserLink id="..."&gt; (name override)</header>
        <div className="content"><Links.UserLink id={userIds[3]} /></div>
      </section>
      <section className="links-userlink-noname">
        <header>&lt;UserLink id="..."&gt; (no name)</header>
        <div className="content"><Links.UserLink id={userIds[4]} /></div>
      </section>
      <section className="links-userlinks">
        <header>&lt;UserLinks ids="..."&gt;</header>
        <div className="content"><Links.UserLinks ids={userIds} /></div>
      </section>
      <section className="links-userlinks-limit">
        <header>&lt;UserLinks ids="..." limit="2"&gt;</header>
        <div className="content"><Links.UserLinks ids={userIds} limit={2} /></div>
      </section>
      <section className="links-userpic">
        <header>&lt;UserPics id="..."&gt;</header>
        <div className="content"><Links.UserPic id={userIds[0]} /></div>
      </section>
      <section className="links-userpic-notfound">
        <header>&lt;UserPic id="..."&gt; (not found)</header>
        <div className="content"><Links.UserPic id={userIds[userIds.length - 1]} /></div>
      </section>
      <section className="links-userpics">
        <header>&lt;UserPics ids="..."&gt;</header>
        <div className="content"><Links.UserPics ids={userIds} /></div>
      </section>
      <section className="links-userpics-limit">
        <header>&lt;UserPics ids="..." limit="2"&gt;</header>
        <div className="content"><Links.UserPics ids={userIds} limit={2} /></div>
      </section>
    </div>
  }
}