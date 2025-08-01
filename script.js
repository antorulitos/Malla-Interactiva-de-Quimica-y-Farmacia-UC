const cursos = [
  { id: 'qg1', nombre: 'Química General I', semestre: 'I Semestre', abre: ['qg2'] },
  { id: 'labqg', nombre: 'Lab. Química General', semestre: 'I Semestre', abre: ['qg2'] },
  { id: 'intro', nombre: 'Intro a Ciencias Farm.', semestre: 'I Semestre', abre: [] },
  { id: 'meds', nombre: 'Mundo de los Medicamentos', semestre: 'I Semestre', abre: ['bot'] },
  { id: 'precalc', nombre: 'Precálculo', semestre: 'I Semestre', abre: ['calc1'] },
  { id: 'filo', nombre: 'Filosofía: ¿Para Qué?', semestre: 'I Semestre', abre: [] },
  { id: 'qg2', nombre: 'Química General II', semestre: 'II Semestre', requisitos: ['qg1', 'labqg'], abre: ['qorg1', 'bot', 'qa1', 'qfis'] },
  { id: 'fisica', nombre: 'Física para Ciencias', semestre: 'II Semestre', abre: ['qfis'] },
  { id: 'calc1', nombre: 'Cálculo I', semestre: 'II Semestre', requisitos: ['precalc'], abre: ['estad', 'qfis'] },
  { id: 'elect1', nombre: 'Electivo', semestre: 'II Semestre', abre: [] },
  { id: 'elect2', nombre: 'Electivo', semestre: 'II Semestre', abre: [] },
  { id: 'qorg1', nombre: 'Química Orgánica I', semestre: 'III Semestre', requisitos: ['qg2'], abre: ['qorg2'] },
  { id: 'bot', nombre: 'Botánica y Farmacognosia', semestre: 'III Semestre', requisitos: ['meds', 'qg2'], abre: [] },
  { id: 'estad', nombre: 'Estadística QF', semestre: 'III Semestre', requisitos: ['calc1'], abre: ['qa1'] },
  { id: 'biocel', nombre: 'Biología de la Célula', semestre: 'III Semestre', abre: ['fisio'] },
  { id: 'elect3', nombre: 'Electivo', semestre: 'III Semestre', abre: [] },
  { id: 'qorg2', nombre: 'Química Orgánica II', semestre: 'IV Semestre', requisitos: ['qorg1'], abre: ['laborg', 'bioq'] },
  { id: 'qa1', nombre: 'Química Analítica I', semestre: 'IV Semestre', requisitos: ['qg2', 'estad'], abre: ['ainst'] },
  { id: 'fisio', nombre: 'Fisiología', semestre: 'IV Semestre', requisitos: ['biocel'], abre: ['micro', 'fispat'] },
  { id: 'teo', nombre: 'Electivo Teológico', semestre: 'IV Semestre', abre: [] },
  { id: 'elect4', nombre: 'Electivo', semestre: 'IV Semestre', abre: [] },
  { id: 'laborg', nombre: 'Lab. Química Orgánica', semestre: 'V Semestre', requisitos: ['qorg2'], abre: ['fq1'] },
  { id: 'bioq', nombre: 'Bioquímica', semestre: 'V Semestre', requisitos: ['qorg2'], abre: ['micro', 'farm1', 'bioqc'] },
  { id: 'qfis', nombre: 'Química-Física', semestre: 'V Semestre', requisitos: ['qg2', 'calc1', 'fisica'], abre: ['fq1', 'farmc', 'bioqc'] },
  { id: 'ainst', nombre: 'Análisis Instrumental', semestre: 'V Semestre', requisitos: ['qa1'], abre: ['tf1'] },
  { id: 'fispat', nombre: 'Fisiopatología', semestre: 'V Semestre', requisitos: ['fisio'], abre: ['farm1', 'bioqc'] },
  { id: 'micro', nombre: 'Microbiología e Inmunología', semestre: 'VI Semestre', requisitos: ['fisio', 'bioq'], abre: [] },
  { id: 'fq1', nombre: 'Fármaco-Química I', semestre: 'VI Semestre', requisitos: ['laborg', 'qfis'], abre: ['fq2', 'fcaf', 'ley'] },
  { id: 'farmc', nombre: 'Farmacocinética y Biofarmacia', semestre: 'VI Semestre', requisitos: ['qfis'], abre: ['tf1'] },
  { id: 'farm1', nombre: 'Farmacología I', semestre: 'VI Semestre', requisitos: ['bioq', 'fispat'], abre: ['farm2', 'salud'] },
  { id: 'elect5', nombre: 'Electivo', semestre: 'VI Semestre', abre: [] },
  { id: 'fq2', nombre: 'Fármaco-Química II', semestre: 'VII Semestre', requisitos: ['fq1'], abre: ['fq3', 'internado', 'privada', 'pp2'] },
  { id: 'tf1', nombre: 'Tecnología Farmacéutica I', semestre: 'VII Semestre', requisitos: ['farmc', 'ainst'], abre: ['pp1', 'tf2'] },
  { id: 'farm2', nombre: 'Farmacología II', semestre: 'VII Semestre', requisitos: ['farm1'], abre: ['fcaf', 'farm3'] },
  { id: 'bioqc', nombre: 'Bioquímica Clínica', semestre: 'VII Semestre', requisitos: ['bioq', 'qfis', 'fispat'], abre: [] },
  { id: 'elect6', nombre: 'Electivo', semestre: 'VII Semestre', abre: [] },
  { id: 'tox', nombre: 'Toxicología', semestre: 'VIII Semestre', abre: [] },
  { id: 'tesis', nombre: 'Tesis de grado', semestre: 'VIII Semestre', abre: [] },
  { id: 'fq3', nombre: 'Fármaco-Química III', semestre: 'IX Semestre', requisitos: ['fq2'], abre: [] },
  { id: 'fcaf', nombre: 'Farmacia Clínica y Atención Farmacéutica', semestre: 'IX Semestre', requisitos: ['fq1', 'farm2'], abre: [] },
  { id: 'farm3', nombre: 'Farmacología III', semestre: 'IX Semestre', requisitos: ['farm2'], abre: ['internado'] },
  { id: 'tf2', nombre: 'Tecnología Farmacéutica II', semestre: 'IX Semestre', requisitos: ['tf1'], abre: ['pp2'] },
  { id: 'opt1', nombre: 'Optativo de Profundización', semestre: 'IX Semestre', abre: [] },
  { id: 'pp1', nombre: 'Práctica Profesional I', semestre: 'IX Semestre', requisitos: ['tf1'], abre: [] },
  { id: 'salud', nombre: 'Salud Pública QF', semestre: 'X Semestre', requisitos: ['farm1'], abre: [] },
  { id: 'internado', nombre: 'Internado Clínico', semestre: 'X Semestre', requisitos: ['fq2', 'farm3'], abre: [] },
  { id: 'privada', nombre: 'Farmacia Privada', semestre: 'X Semestre', requisitos: ['fq2'], abre: [] },
  { id: 'ley', nombre: 'Legislación y Deontología Farmacéutica', semestre: 'X Semestre', requisitos: ['fq1'], abre: [] },
  { id: 'opt2', nombre: 'Optativo de Profundización', semestre: 'X Semestre', abre: [] },
  { id: 'opt3', nombre: 'Optativo de Profundización', semestre: 'X Semestre', abre: [] },
  { id: 'pp2', nombre: 'Práctica Profesional II', semestre: 'X Semestre', requisitos: ['fq2', 'tf2'], abre: [] },
];

const estado = {};

function crearMalla() {
  const contenedor = document.getElementById('malla');
  const semestres = [...new Set(cursos.map(c => c.semestre))];
  semestres.forEach(sem => {
    const col = document.createElement('div');
    col.className = 'semestre';
    col.innerHTML = `<h2>${sem}</h2>`;
    cursos
      .filter(c => c.semestre === sem)
      .forEach(curso => {
        const btn = document.createElement('div');
        btn.className = 'curso bloqueado';
        btn.id = curso.id;
        btn.innerText = curso.nombre;
        btn.onclick = () => aprobarCurso(curso.id);
        col.appendChild(btn);
        estado[curso.id] = false;
      });
    contenedor.appendChild(col);
  });
  actualizarCursos();
}

function aprobarCurso(id) {
  const el = document.getElementById(id);
  if (el.classList.contains('bloqueado')) return;
  estado[id] = !estado[id];
  el.classList.toggle('aprobado', estado[id]);
  actualizarCursos();
}

function actualizarCursos() {
  cursos.forEach(curso => {
    const el = document.getElementById(curso.id);
    const requisitos = curso.requisitos || [];
    const cumple = requisitos.every(r => estado[r]);
    if (!estado[curso.id]) {
      el.classList.toggle('bloqueado', !cumple);
    }
  });
}

window.onload = crearMalla;
