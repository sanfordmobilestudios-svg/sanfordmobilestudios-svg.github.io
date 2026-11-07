// As categorias também funcionam sem JavaScript pelos elementos details/summary.
// Escape fecha a categoria e devolve o foco ao seu título.
document.querySelectorAll('details').forEach((categoria) => {
  categoria.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && categoria.open) {
      categoria.open = false;
      categoria.querySelector('summary').focus();
      event.preventDefault();
    }
  });
});
