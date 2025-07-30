const express =require('express')
const app =express();
const port=3000;

app.use(express.json());

let items = [
  { id: 1, name: 'item-one', add: 'jkndjdsn' },
  { id: 2, name: 'item-two', add: 'jdnsjdnj' }
];

app.get("/items/:id",(req,res)=>{
const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);

  if (!item) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.json(item);
})

app.delete('/items/:id/property/:prop', (req, res) => {
  const id = parseInt(req.params.id);
  const prop = req.params.prop;   // e.g. 'add'

  const item = items.find(i => i.id === id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  if (!(prop in item)) {
    return res.status(400).json({ message: `Property "${prop}" does not exist` });
  }

  // Option 1: Mutate directly
  delete item[prop];

  res.json({ message: `Property "${prop}" deleted`, item });
});
app.listen(3000)