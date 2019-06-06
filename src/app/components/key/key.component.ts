import { Component, OnInit } from '@angular/core';
import { Kana } from 'src/app/models/kana';
import { KanasService } from 'src/app/services/kanas.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {
  kanas: Observable<Kana[]>;

  constructor(public kanaService: KanasService) { kanaService = new KanasService(); }

  ngOnInit() {
    this.kanas = this.kanaService.get();
  }
}
