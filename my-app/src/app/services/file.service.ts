import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { encode } from 'base64-arraybuffer';
import yaml from 'js-yaml';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  getJsonObjFromYamlOrJsonFile(file: File): Observable<string> {
    return new Observable(observer => {
      const reader = new FileReader();
      let jsonObj;
      
      reader.readAsText(file, 'utf8');
      reader.onload = () => {
        const resultString = reader.result.toString();

        if(file.type == "application/json"){
          jsonObj = JSON.parse(resultString);
        } else {
          jsonObj = yaml.safeLoad(resultString);
        }

        observer.next(jsonObj);
        observer.complete();
      };

      reader.onerror = () => {
        observer.error(reader.error);
      };
    });
  }
}
