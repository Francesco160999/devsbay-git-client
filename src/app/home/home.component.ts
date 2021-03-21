import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChildProcessService } from 'ngx-childprocess';
import GitCommands from '../../utilities/git-commands.utility';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string = "";
  public description: string = "";
  public path: string = "No selected repository...";
  
  private git: GitCommands;

  constructor(private router: Router, private childProcessService: ChildProcessService) {
    this.git = new GitCommands(childProcessService);
    
   }

  ngOnInit(): void { }

  public commit(){
    this.git.commit(this.title, this.description);
  }

  public push(){
    this.git.push(false);
  }

  public onFolderSelected(event){
    var path = event.target.files[0].path;

    this.path = path;
    GitCommands.GIT_PROJECT_PATH = path;
    console.log(GitCommands.GIT_PROJECT_PATH); 
  }

  public openInput(){ 
    document.getElementById("upload").click();
  }

}
