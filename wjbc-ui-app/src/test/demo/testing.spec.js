import { testing } from '../../demo';

describe(`When invoking testing`, () => {
  it(`Then it should return the correct value`, () => {
    const result = testing();
    expect(result).toEqual(1);
  });
  it(`Then it should return the correct value`, () => {
    const result = testing();
    expect(result).not.toEqual(0);
  });
});
