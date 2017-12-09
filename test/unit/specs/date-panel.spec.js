import { createTest, destroyVM } from '../util';
import DatePanel from 'packages/date-panel';

describe('DatePanel', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(DatePanel, true);
    expect(vm.$el).to.exist;
  });
});

