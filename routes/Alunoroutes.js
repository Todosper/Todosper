import express from 'express';
const router = express.Router();
import Alunocontroller from '../controllers/AlunoController.js'
const controle = new Alunocontroller();


const caminhobase = 'aluno/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
export default router