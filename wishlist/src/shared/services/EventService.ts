import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root' //methna root kiyna eke theruma willa mulu application ektm meka denna kiyna eki , mehtnd tonnm component eke nama denna puluwan, platform kiyla ekk hiynwa eka dennath puluwan
})
export class EventService {
    private subject = new Subject();

    emit(eventName: string, payload: any){
        //debugger
        this.subject.next({eventName, payload});
    }

    listen(eventName: string , callback: (event:any) => void){
        this.subject.asObservable().subscribe((nextObj : any) => {
            //debugger
            if(eventName === nextObj.eventName){
                callback(nextObj.payload);
            }
        });
    }
}

//export default new EventService();  //methanin attatama export krnne object ekk hose , eka hodt mathk thiygnna
//methanin me export krna object eka  thami anik components walal use krala eka eka event emit krnne saha eka eka event walt listen krnne 


