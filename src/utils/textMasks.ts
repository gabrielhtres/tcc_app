function maskCPF(text: string) {
  let newText = '';
  const caracteres = text.replace(/\D/g, '').split('');

  caracteres.forEach((caractere, index) => {
    if (index === 3 || index === 6) {
      newText += '.';
    } else if (index === 9) {
      newText += '-';
    }
    newText += caractere;
  });

  return newText;
}

export { maskCPF };
