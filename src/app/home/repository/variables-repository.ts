import { Variables } from '../data/variables';

export abstract class VariablesRepository{
  public abstract get variables(): Variables
}
