import { generateReactComponent } from '../src/generator';

test('Generates a button component', () => {
  const prompt = 'Create a button with color: blue and text: Submit';
  const generatedCode = generateReactComponent(prompt);

  expect(generatedCode).toContain('<button');
  expect(generatedCode).toContain('Submit');
  expect(generatedCode).toContain('backgroundColor: \'blue\'');
});
