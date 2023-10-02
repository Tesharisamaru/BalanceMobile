import { Injectable } from '@angular/core';
import { Variables } from '../data/variables';
import { VariablesRepository } from './variables-repository';

@Injectable({
  providedIn: 'any'
})
export class VariablesRepositoryDummyImplService {

  public get variables(): Variables{
    return{
      balance:2,
      volume:3,
      bass:4,
      mid:5,
      treble:5,
      }
    ;  

  }
}
