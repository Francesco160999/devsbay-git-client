import { Component, OnInit } from '@angular/core';
import { ChildProcessService } from 'ngx-childprocess';
import GitCommands from '../../utilities/git-commands.utility';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private git: GitCommands;

  constructor(private childProcessService: ChildProcessService) {
    this.git = new GitCommands(childProcessService);
    this.git.commit("test", "test");
   }

  ngOnInit(): void { }

}
