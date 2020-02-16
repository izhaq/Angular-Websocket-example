import { TestBed } from '@angular/core/testing';

import { SocketsMessagesService } from './sockets-messages.service';

describe('SocketsMessagesService', () => {
  let service: SocketsMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketsMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
