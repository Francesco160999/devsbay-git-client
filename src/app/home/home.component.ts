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
    let res = this.git.commit(this.title, this.description);
    if(res == null){
      alert("1 Commit Staged");
    }
  }

  public push(){
    let res = this.git.push(false);
    if(res == null){
      alert("Commit/s Pushed");
    }
  }

  public onFolderSelected(event){
    var path: string = event.target.files[0].path;
    var x = "";
    if(path.substr(path.length - 1) == '/'){
      x = path;
    } else {
      var split = path.split("/");
      x = split.slice(0, split.length - 2).join("/") + "/";
    }

    this.path = x;
    GitCommands.GIT_PROJECT_PATH = x;
    console.log(GitCommands.GIT_PROJECT_PATH); 
  }

  public openInput(){ 
    document.getElementById("upload").click();
  }

}
