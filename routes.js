const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Create User</button></input></form></body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/users'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body><h1>Users</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>')
    res.write('</html>')
  }

  if (url === '/create-user' && method === 'POST'){
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const user = parsedBody.split('=')[1]
      res.writeHead(301, {Location: '/'});
      console.log(user)
      return res.end()
    })
  }
}

module.exports = requestHandler
