import { Country } from 'app/shared/model/enumerations/country.model';

export interface ILocation {
  id?: number;
  postalCode?: string;
  city?: string;
  stateProvince?: string;
  country?: Country;
}

export class Location implements ILocation {
  constructor(
    public id?: number,
    public postalCode?: string,
    public city?: string,
    public stateProvince?: string,
    public country?: Country
  ) {}
}
