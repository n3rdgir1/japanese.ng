import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { KeyComponent } from './components/key/key.component';

const routes: Routes = [
  {path: '', component: QuizComponent},
  {path: 'key', component: KeyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
