export const useEmailValidation = (input: string) => {
  // Expresión regular para verificar el formato de un email válido
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(input);
};
