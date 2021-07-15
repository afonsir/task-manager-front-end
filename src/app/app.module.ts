import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { TasksComponents } from './tasks/tasks.component'
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component'

const ROUTES = RouterModule.forRoot([
  {
    path: 'tasks',
    component: TasksComponents
  }
])

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponents,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
