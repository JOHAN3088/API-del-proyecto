const ModelUser=require("./model")
const express=require ("express");
const dbconect=require("./config")
const app= express();
const router = express.Router();
//CREAR USUARIO

router.post('/crear', async (req,res,next)=>{
    
    const body = req.body;
    const respuesta= await ModelUser.create(body);
    res.send(respuesta);
      
   });
//CONSULTAR
router.get('/',async(req,res)=>{    
    const respuesta= await ModelUser.find({});
    res.send(respuesta);
    });
//CONSULTAR POR ID
router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const respuesta= await ModelUser.findById({_id:id});   
    res.send(respuesta);
    });
//ACTUALIZAR
router.put('/:id',async(req,res,next)=>{
        const body = req.body;
        const id = req.params.id;
        const respuesta= await ModelUser.findByIdAndUpdate({_id:id},body);
        res.send(respuesta); 
   
    });
//ELIMINAR
router.delete('/:id',async(req,res,next)=>{
    const id = req.params.id;
    const respuesta= await ModelUser.deleteOne({_id:id});
    res.send(respuesta); 
    });

  app.use(express.json());
  app.use(router);    
  app.listen(3005,()=>{
    console.log("el servidor esta en el puerto 3005")
});  
dbconect();


