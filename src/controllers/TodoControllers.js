const { create } = require('../models/ToDo')
const ToDo = require('../models/ToDo')

module.exports = {

    list(req,res){
        const cadastros = ToDo.list()
        return res.json(cadastros)
    },
    create(req,res){
        const newCadastros = req.body
        const cadastroCreated = ToDo.create(newCadastros)
        return res.status(201).json(cadastroCreated)
    },
    update(req,res){
        const id = req.params.id
        const cadastro = req.body
        const cadastroUpdate = ToDo.update(id,cadastro)
        if(!cadastroUpdate){
            return res.status(400).json({msg:'Item não encontrado'})
        }
       return res.json(cadastroUpdate)
    },
    delete(req,res){
        const id = req.params.id
        const cadastroDeleted = ToDo.delete(id)
        if(!cadastroDeleted){
            return res.status(400).json({msg:"Item não encontrado"})
        }
        return res.status(204).json()
    }
}