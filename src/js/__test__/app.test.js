import ErrorRepository from '../app';

test('Should return Unknown Error', () => {
  expect(new ErrorRepository().translate(505)).toBe('Unknown error');
});

test('Should return correct code', () => {
  expect(new ErrorRepository().translate(30)).toBe('These tickets has been ordered!');
});

test('Class ErrorRepository should recieve an Array of errors', () => {
  expect(new ErrorRepository().errors.size).toBe(3);
});
