import tape from 'tape'
import user from 'patchkit-fixtures/user'
import users from 'patchkit-fixtures/users'
const userIds = Object.keys(users.profiles)
const sopts = { context: { user: user, users: users } }

export default function (cb) {
  tape('UserLink', function(t) {
    t.test('renders an anchor', function(t) {
      var linkEl = $('section.links-userlink .user-link')
      t.equal(linkEl.tagName, 'A')
      t.end()
    })
    t.test('use the self-assigned name', function(t) {
      var linkEl = $('section.links-userlink .user-link')
      t.equal(linkEl.getAttribute('title'), 'paul')
      t.equal(linkEl.innerText, 'paul')
      t.end()
    })
    t.test('use the local-user override name', function(t) {
      var linkEl = $('section.links-userlink-override .user-link')
      t.equal(linkEl.getAttribute('title'), 'dominic')
      t.equal(linkEl.innerText, 'dominic')
      t.end()
    })
    t.test('use a shortened ID if name is unknown', function(t) {
      var linkEl = $('section.links-userlink-noname .user-link')
      t.equal(linkEl.getAttribute('title'), '@sbfma...')
      t.equal(linkEl.innerText, '@sbfma...')
      t.end()
    })
  })

  tape('UserLinks', function(t) {
    t.test('renders all anchors', function(t) {
      var linksEls = $$('section.links-userlinks .user-link')
      t.equal(linksEls.length, 5)
      t.end()
    })
    t.test('respects the limit', function(t) {
      var linksEls = $$('section.links-userlinks-limit .user-link')
      t.equal(linksEls.length, 2)
      t.end()
    })
  })

  tape.onFinish(cb)
}
