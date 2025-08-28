//importar model 

import Curso from "../models/curso.js"

export default class CursoController {

    constructor(caminhoBase = 'curso/') {
        this.caminhoBase = caminhoBase

        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add")
        }

        this.add = async (req, res) => {
            // cria curso
            await Curso.create({
                nome: req.body.nome,
                area: req.body.area,
                anoFundacao: req.body.anoFundacao,
                nivel: req.body.nivel
            })
            res.redirect('/' + caminhoBase + 'add')
        }

        this.list = async (req, res) => {
            const resultado = await Curso.find({})
            res.render(caminhoBase + 'lst', { Cursos: resultado})
        }
    }
}