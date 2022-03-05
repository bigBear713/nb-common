import { IsObservablePipe } from '../is-observable.pipe';

describe('Pipe: IsObservablee', () => {
  it('create an instance', () => {
    let pipe = new IsObservablePipe();
    expect(pipe).toBeTruthy();
  });
});
