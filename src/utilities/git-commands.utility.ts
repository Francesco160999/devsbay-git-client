//import { exec, which, echo, exit } from "shelljs";
//import { shell } from "electron";
//import * as child from 'child_process';
import { ChildProcessService } from 'ngx-childprocess';
// @ts-ignore

export default class GitCommands {

    static GIT_PROJECT_PATH: string = "";

    constructor(private childProcessService: ChildProcessService) { 

    }

    private execute(commands: string[]): any {
        let options: string[] = [];
        let command: string = "cd " + GitCommands.GIT_PROJECT_PATH;
        for(let cmd of commands){
            command += (command.length == 0 ? '':' && ') + cmd;
        }
        return this.childProcessService.childProcess.exec(command, options, (data) => {console.log(data)});
    }

    public commit(title: string, description: string): any {
        return this.execute([
            'git add -A',
            `git commit -m "${title}" -m "${description}"`
        ]);
    }

    public push(force: boolean = false): any{
        return this.execute([`git push ${force?'-f':''}`]);
    }
}