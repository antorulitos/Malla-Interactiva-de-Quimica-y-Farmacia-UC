const cursos = [
  { id: 'qg1', nombre: 'Química General I', requisitos: [], abre: ['qg2'] },
  { id: 'labqg', nombre: 'Laboratorio de Química General', requisitos: [], abre: ['qg2'] },
  { id: 'intro', nombre: 'Introducción a las Ciencias Farmacéuticas', requisitos: [], abre: [] },
  { id: 'meds', nombre: 'Mundo de los Medicamentos', requisitos: [], abre: ['bot'] },
  { id: 'precalc', nombre: 'Precálculo', requisitos: [], abre: ['calc1'] },
  { id: 'filo', nombre: 'Filosofía: ¿Para Qué?', requisitos: [], abre: [] },
  ...
  // El resto ya lo tienes en tu archivo "script.js" (se agregó completo en el proyecto)
];

const estado = {};

function crearMalla() {
  const malla = document.getElementById('malla');
  cursos.forEach(curso => {
    const div = document.createElement('div');
    div.className = 'curso bloqueado';
    div.id = curso.id;
    div.innerText = curso.nombre;
    div.onclick = () => aprobarCurso(curso.id);
    malla.appendChild(div);
    estado[curso.id] = false;
  });
  actualizarCursos();
}

function aprobarCurso(id) {
  if (document.getElementById(id).classList.contains('bloqueado')) return;
  estado[id] = !estado[id];
  const div = document.getElementById(id);
  div.classList.toggle('aprobado', estado[id]);
  actualizarCursos();
}

function actualizarCursos() {
  cursos.forEach(curso => {
    const div = document.getElementById(curso.id);
    const requisitosCumplidos = curso.requisitos.every(req => estado[req]);
    if (!estado[curso.id]) {
      div.classList.toggle('bloqueado', !requisitosCumplidos);
    }
  });
}

window.onload = crearMalla;

