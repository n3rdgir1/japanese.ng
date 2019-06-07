import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { KeyComponent } from './components/key/key.component';

const routes: Routes = [
  {path: 'quiz', component: QuizComponent},
  {path: 'key', component: KeyComponent},
  {path: '**', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
