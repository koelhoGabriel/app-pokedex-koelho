// Função utilitária para capitalizar a primeira letra de uma string
export const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};