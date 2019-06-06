import { KanasService } from './kanas.service';

describe('KanasService', () => {
  let service;
  beforeEach(() => {
    service = new KanasService();
  });

  it('should get 70 kanas', () => {
    expect(service.get().length).toEqual(71);
  });
});
