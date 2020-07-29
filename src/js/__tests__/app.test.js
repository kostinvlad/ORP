import orderByProps from '../app';

test('проверка обычной работы функции', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const args = ['defence', 'name'];
  const received = orderByProps(obj, args);
  const expected = [
    { key: 'defence', value: 40 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ];
  expect(received).toEqual(expected);
});

test('проверка обычной работы функции', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const args = ['attack', 'level'];
  const received = orderByProps(obj, args);
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'level', value: 2 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
  ];
  expect(received).toEqual(expected);
});

test('проверка обычной работы функции', () => {
  const obj = {
    name: 'маг', health: 100, level: 2, attack: 80, defence: 40,
  };
  const args = ['name', 'defence'];
  const received = orderByProps(obj, args);
  const expected = [
    { key: 'name', value: 'маг' },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 100 },
    { key: 'level', value: 2 },
  ];
  expect(received).toEqual(expected);
});

test('проверка обычной работы функции', () => {
  const obj = {
    name: 'маг', health: 100, level: 2, attack: 80, defence: 40,
  };
  const args = ['name', 'health'];
  const received = orderByProps(obj, args);
  const expected = [
    { key: 'name', value: 'маг' },
    { key: 'health', value: 100 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
  ];
  expect(received).toEqual(expected);
});
