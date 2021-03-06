module.exports={
    dLoads:(req,res,next) => {const dbInstance = req.app.get('db');
    dbInstance.read_dloads()
    .then(dLoads=>res.status(200).send(dLoads))
    .catch(err=>{
        res.status(500).send({errorMessage: "Just follow the soothing sound of my VoIcE!!!"});
        console.log(err)
    })
    },
    uLoads:(req,res,next) => {const dbInstance = req.app.get('db');
    dbInstance.read_uloads_all()
    .then(myLoads=>res.status(200).send(myLoads))
    .catch(err=>{
        res.status(500).send({errorMessage: "Just follow the soothing sound of my VoIcE!!!"});
        console.log(err)
    })
    },
    myLoads:(req,res,next) => {const dbInstance = req.app.get('db');
    dbInstance.read_uloads(req.params.id)
    .then(myLoads=>res.status(200).send(myLoads))
    .catch(err=>{
        res.status(500).send({errorMessage: "Just follow the soothing sound of my VoIcE!!!"});
        console.log(err)
    })
    },
    myLoadsSingle:(req,res,next) => {const dbInstance = req.app.get('db');
    dbInstance.read_uloads_single(req.params.uid,req.params.lid)
    .then(myOneLoad => res.status(200).send(myOneLoad))
    .catch(err=>{
        res.status(500).send({errorMessage: "Just follow the soothing sound of my VoIcE!!!"});
        console.log(err)})
    },
    newLoad:(req,res,next) => {const dbInstance = req.app.get('db');
    const {userid,desIn,massIn,vMIn,bCIn} = req.body;
    dbInstance.create_load([userid,desIn,massIn,vMIn,bCIn])
    .then(()=>res.sendStatus(200))
    .catch(err=>{
        res.status(500).send({errorMessage:"Just follow the soothing sound of my VoIcE!!!"});
        console.log(err)
    })
},
    updateLoad:(req,res,next) => {const dbInstance = req.app.get('db');
        const {desIn,massIn,vMIn,bCIn} = req.body;
        dbInstance.update_load(req.params.id,desIn,massIn,vMIn,bCIn)
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({errorMessage: "Just follow the soothing sound of my VoIcE!!!"});
            console.log(err)
        })
},
    deleteLoad:(req,res,next) => {const dbInstance = req.app.get('db');
        dbInstance.delete_load(req.params.id)
        .then(()=>
        dbInstance.read_uloads_all()
        .then((loads=>res.status(200).send(loads))))
        .catch(err=>{
            res.status(500).send({errorMessage:"Just follow the soothing sound of my VoIcE!!!"});
            console.log(err)
        })
},
    adminLoads:(req,res,next) => {const dbInstance = req.app.get('db');
        dbInstance.read_admin_loads()
        .then(dLoads=>res.status(200).send(dLoads))
        .catch(err=>{
            res.status(500).send({errorMessage: "Just follow the soothing sound of my VoIcE!!!"});
            console.log(err)
})
}
}