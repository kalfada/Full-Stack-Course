const
    express = require('express'),
    app = express(),
    PORT = 4000,
    router = require('./router')

app.use(express.json())

router(app)

app.listen(PORT, () => console.log(`Server is running: ${PORT}`))
