import { KanasService } from './kanas.service';

describe('KanasService', () => {
  let service;
  beforeEach(() => {
    service = new KanasService();
  });

  it('should get 70 kanas', done => {
    service.get().subscribe(kanas => {
      expect(kanas.length).toEqual(71);
      done();
    });
  });
});
