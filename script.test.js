import { direBonjour } from './script';

test('renvoie Bonjour avec le nom de l\'utilisateur', () => {
    const nom = 'Alice';
    const resultat = direBonjour(nom);
    expect(resultat).toBe('Bonjour, Alice');
});
