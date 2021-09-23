var express = require('express');
var router = express.Router();

var { getPdfRecords, getPdfRecordsByType, getPdfAttributes, deletePdf } = require('./../data/pdfs');

/* GET users listing. */
router.get('/', function (req, res, next) {
  const pdfs = getPdfRecords();
  res.send(pdfs);
});

router.get('/fields', function (req, res, next) {
  const attributes = getPdfAttributes();
  res.send(attributes);
});

router.get('/:type', function (req, res, next) {
  const { type } = req.params;
  const pdfs = getPdfRecordsByType(type);
  res.send(pdfs);
});

router.post('/new', function (req, res, next) {
  var { files: { file }, body: data } = req;
  const filename = `${Date.now()}_${data.file_name}`;
  file.mv(`public/pdfs/${filename}`);
  data.pathname = filename;
  res.send(data);
})

router.delete('/:id', function (req, res, next) {
  const { id } = req.params;
  const user = deletePdf(id);
  res.send(user);
});

router.post(':/id', function (req, res, next) {
  const { id } = req.params;
  res.send(req.body)
})

module.exports = router;
