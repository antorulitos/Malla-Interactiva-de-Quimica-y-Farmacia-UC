document.addEventListener("DOMContentLoaded", () => {
    const cursos = [
        // Formato: [nombre, semestre (0-indexed), requisitos (por nombre)]
        ["Química General I", 0, []],
        ["Laboratorio de Química General", 0, []],
        ["Introducción a las Ciencias Farmacéuticas", 0, []],
        ["Mundo de los Medicamentos", 0, []],
        ["Precálculo", 0, []],
        ["Filosofía: ¿Para Qué?", 0, []],
        ["Química General II", 1, ["Química General I", "Laboratorio de Química General"]],
        ["Física para Ciencias", 1, []],
        ["Cálculo I", 1, ["Precálculo"]],
        ["Electivo 1", 1, []],
        ["Electivo 2", 1, []],
        ["Química Orgánica I", 2, ["Química General II"]],
        ["Botánica y Farmacognosia", 2, ["Mundo de los Medicamentos", "Química General II"]],
        ["Estadística para Química y Farmacia", 2, ["Cálculo I"]],
        ["Biología de la Célula", 2, []],
        ["Electivo 3", 2, []],
        ["Química Orgánica II", 3, ["Química Orgánica I"]],
        ["Química Analítica I", 3, ["Química General II", "Estadística para Química y Farmacia"]],
        ["Fisiología", 3, ["Biología de la Célula"]],
        ["Electivo Teológico", 3, []],
        ["Electivo 4", 3, []],
        ["Laboratorio de Química Orgánica", 4, ["Química Orgánica II"]],
        ["Bioquímica", 4, ["Química Orgánica II"]],
        ["Química-Física", 4, ["Cálculo I", "Física para Ciencias", "Química General II"]],
        ["Análisis Instrumental", 4, ["Química Analítica I"]],
        ["Fisiopatología", 4, ["Fisiología"]],
        ["Microbiología e Inmunología", 5, ["Fisiología", "Bioquímica"]],
        ["Fármaco-Química I", 5, ["Laboratorio de Química Orgánica", "Química-Física"]],
        ["Farmacocinética y Bio-farmacia", 5, ["Química-Física"]],
        ["Farmacología I", 5, ["Fisiopatología", "Bioquímica"]],
        ["Electivo 5", 5, []],
        ["Fármaco-Química II", 6, ["Fármaco-Química I", "Farmacología I"]],
        ["Tecnología Farmacéutica I", 6, ["Análisis Instrumental", "Farmacocinética y Bio-farmacia"]],
        ["Farmacología II", 6, ["Farmacología I"]],
        ["Bioquímica Clínica", 6, ["Bioquímica", "Fisiopatología", "Química-Física"]],
        ["Electivo 6", 6, []],
        ["Toxicología", 7, []],
        ["Tesis de grado", 7, []],
        ["Fármaco-Química III", 8, ["Fármaco-Química II"]],
        ["Práctica Profesional II", 9, ["Fármaco-Química II", "Tecnología Farmacéutica II"]], // Nota: cambié el semestre de este curso
        ["Internado Clínico", 9, ["Fármaco-Química II", "Farmacología III"]],
        ["Farmacia Privada", 9, ["Fármaco-Química II"]],
        ["Farmacia Clínica y Atención Farmacéutica", 8, ["Fármaco-Química I", "Farmacología II"]],
        ["Tecnología Farmacéutica II", 8, ["Tecnología Farmacéutica I"]],
        ["Práctica Profesional I", 9, ["Tecnología Farmacéutica I"]], // Nota: cambié el semestre de este curso
        ["Farmacología III", 8, ["Farmacología II"]],
        ["Optativo de Profundización 1", 8, []],
        ["Legislación y Deontología Farmacéutica", 9, ["Fármaco-Química I"]],
        ["Salud Pública para Química y Farmacia", 9, ["Farmacología I"]],
        ["Optativo de Profundización 2", 9, []],
        ["Optativo de Profundización 3", 9, []]
    ];

    const malla = document.querySelector(".curriculum-map");
    const estado = JSON.parse(localStorage.getItem('mallaEstado') || '{}');

    function actualizarHabilitados() {
        cursos.forEach(([nombre, , requisitos]) => {
            const cursoElement = document.querySelector(`[data-nombre="${nombre}"]`);
            if (!cursoElement) return;

            const esAprobado = estado[nombre];
            if (esAprobado) {
                cursoElement.classList.add("aprobado");
                cursoElement.classList.remove("habilitado");
            } else {
                const habilitado = requisitos.every(req => estado[req]);
                cursoElement.classList.toggle("habilitado", habilitado);
                cursoElement.classList.toggle("aprobado", false);
            }
        });
    }

    function crearMalla() {
        malla.innerHTML = ''; // Limpiar el contenedor antes de crear
        const años = ["Primer Año", "Segundo Año", "Tercer Año", "Cuarto Año", "Quinto Año"];
        const numSemestresPorAño = 2;
        
        for (let i = 0; i < años.length; i++) {
            const yearDiv = document.createElement("div");
            yearDiv.classList.add("year");
            yearDiv.innerHTML = `<h2>${años[i]}</h2>`;
            malla.appendChild(yearDiv);

            for (let j = 0; j < numSemestresPorAño; j++) {
                const semestreIndex = i * numSemestresPorAño + j;
                const semestreDiv = document.createElement("div");
                semestreDiv.classList.add("semester");
                semestreDiv.innerHTML = `<h3>Semestre ${semestreIndex + 1}</h3>`;
                yearDiv.appendChild(semestreDiv);

                cursos.filter(curso => curso[1] === semestreIndex)
                    .forEach(([nombre]) => {
                        const cursoDiv = document.createElement("div");
                        cursoDiv.classList.add("course");
                        cursoDiv.textContent = nombre;
                        cursoDiv.dataset.nombre = nombre;
                        cursoDiv.addEventListener("click", () => {
                            if (cursoDiv.classList.contains("habilitado")) {
                                estado[nombre] = !estado[nombre];
                                localStorage.setItem('mallaEstado', JSON.stringify(estado));
                                actualizarHabilitados();
                            }
                        });
                        semestreDiv.appendChild(cursoDiv);
                    });
            }
        }
        actualizarHabilitados();
    }

    crearMalla();
});
