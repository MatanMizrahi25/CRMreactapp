const express = require('express');
const app = express();
const port = 3001;

app.get('/api/client/:id', (req, res) => {
  res.json({
    clientId: req.params.id,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1-555-1234",
    tasks: [
      { taskId: "t1", title: "Call back", completed: false },
      { taskId: "t2", title: "Send proposal", completed: true }
    ]
  });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
