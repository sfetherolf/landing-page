let express = require('express');
let app = express();
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

const dataDir = path.join(__dirname, 'data');
const subsFile = path.join(dataDir, 'subscribers.json');

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
if (!fs.existsSync(subsFile)) fs.writeFileSync(subsFile, '[]');

app.get('/', (req, res) => {
  res.render('index', { subscribed: req.query.subscribed });
});

app.post('/subscribe', (req, res) => {
  const email = (req.body.email || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.redirect('/?subscribed=0');
  }

  try {
    const raw = fs.readFileSync(subsFile, 'utf8');
    const list = JSON.parse(raw || '[]');
    if (!list.includes(email)) list.push(email);
    fs.writeFileSync(subsFile, JSON.stringify(list, null, 2));
    return res.redirect('/?subscribed=1');
  } catch (err) {
    console.error('Failed to save subscriber', err);
    return res.redirect('/?subscribed=0');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});