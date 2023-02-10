import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

/*--------------------------------------------
Example of request to strapi products endpoint
---------------------------------------------*/
app.get('/', (req, res) => {
  axios
    .get('api/products?populate=*')
    .then(result => res.status(202).json(result.data))
    .catch(err => res.status(500).json(err))
})

export default {
  path: '/api',
  handler: app
}
