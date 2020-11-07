const NodeCache = require('node-cache')
const cache = new NodeCache()
cache.set('cadastros',[])
cache.set('autoIncrementId', 1)

module.exports = class ToDo{

    static list(){
        return cache.get('cadastros')
    }
    static create(cadastro){
        const cadastros = cache.get('cadastros')
        const autoIncrementId = cache.get('autoIncrementId')
        cadastro = {id: autoIncrementId, ...cadastro}
        cache.set('cadastros',[...cadastros, cadastro])
        cache.set('autoIncrementId', autoIncrementId + 1)
        return cadastro
    }
    static update(id,cadastro){
        let cadastros = cache.get('cadastros')
        let index = cadastros.findIndex(item => item.id == id)
        if(index > -1){
            cadastros[index] = {...cadastros[index],...cadastro}
            cache.set('cadastros',ccadastros)
            return cadastros[index]
        }
        return false

    }
    static delete(id){
        let cadastros = cache.get('cadastros')
        let index = cadastros.findIndex(item => item.id == id)
        if(index > -1){
            cadastros = cadastros.filter(item => item.id != id)
            cache.set('cadastros',cadastros)
            return true
        }
        return false
    }
}