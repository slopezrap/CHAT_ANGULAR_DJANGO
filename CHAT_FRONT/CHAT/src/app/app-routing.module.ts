import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatCompComponent } from 'src/app/components/chat-comp/chat-comp.component';


const routes: Routes = [
  {path: 'chat/lobby', component: ChatCompComponent },

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
