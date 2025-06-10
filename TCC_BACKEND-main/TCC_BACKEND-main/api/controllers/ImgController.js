const multer = require('multer');
const parser = multer({ dest: 'public/uploads/' })
const fs = require('fs')

class Img{
    static upload = (req, res) => {
        parser.single('img')(req, res, err => {
            if (err)
                res.status(500).json({ error: 1, payload: err });
            else {
                const image = {};
                console.log(req.file)
                image.id = req.file.filename;
                image.url = `${image.id}.jpg`;
                fs.rename(`public/uploads/${req.file.filename}`, `public/uploads/${req.file.filename}.jpg`, function(err){
                        if(err){
                            throw err;	
                        }else{
                      console.log('Arquivo renomeado');
                    }});
                
                
                res.status(200).json({ error: 0, payload: { id: image.id, url: image.url } });
            }
        });
    }
}


module.exports = Img