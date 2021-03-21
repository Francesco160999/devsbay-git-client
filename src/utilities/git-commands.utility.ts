//import { exec, which, echo, exit } from "shelljs";
//import { shell } from "electron";
//import * as child from 'child_process';
import { ChildProcessService } from 'ngx-childprocess';
// @ts-ignore

export default class GitCommands {

    static GIT_PROJECT_PATH: string = "";

    constructor(private childProcessService: ChildProcessService) { 

    }

    private execute(command: string): any {
        let options: string[] = [];
        return this.childProcessService.childProcess.exec(command, options, (data) => {console.log(data)});
    }

    public commit(title: string, description: string): any {
        return this.execute(`git commit -m "${title}" -m "${description}"`);
    }

    public push(force: boolean): any{
        return this.execute(`git push ${force?'-f':''}`);
    }
}