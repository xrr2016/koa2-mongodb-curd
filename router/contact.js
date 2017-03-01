const Router = require('koa-router')
const Contact = require('../model/contact')
const contact = new Router()

contact.get('/', async (ctx, next) => {
  const contacts = await Contact.getContacts()
  ctx.render('index', contacts)
  next()
}).get('/:id', async (ctx, next) => {
  const contact = await Contact.getContact(ctx.params.id)
  ctx.render('info', contact)
  next()
}).post('/', async (ctx, next) => {
  const contacts = await Contact.createContact(ctx.body)
  ctx.render('index', contacts)
  next()
}).put('/:id', async (ctx, next) => {
  const contacts = await Contact.updateContacts(ctx.params.id)
  ctx.render('info', contacts)
  next()
}).del('/:id', async (ctx, next) => {
  const contacts = await Contact.deleteContact(ctx.params.id)
  ctx.render('index', contacts)
  next()
})

module.exports = contact
