const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/spotme-db'
const secret = process.env.SECRET || process.env.REACT_APP_SECRET

module.exports = {
  port,
  dbURI,
  secret
}
