// Arquivo mínimo, mas útil para futuras funcionalidades
console.log("TaskManager carregado com sucesso!");

// Exemplo: Marcar tarefa como concluída ao clicar
document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('ul li');

    tasks.forEach(task => {
        task.addEventListener('click', () => {
            task.style.textDecoration = task.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        });
    });
});
