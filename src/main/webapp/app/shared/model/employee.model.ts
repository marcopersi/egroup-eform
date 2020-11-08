import { Moment } from 'moment';
import { Company } from 'app/shared/model/enumerations/company.model';
import { Language } from 'app/shared/model/enumerations/language.model';
import { Country } from 'app/shared/model/enumerations/country.model';

export interface IEmployee {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  hireDate?: Moment;
  ibanNo?: number;
  company?: Company;
  language?: Language;
  streetAddress?: string;
  postalCode?: string;
  city?: string;
  stateProvince?: string;
  country?: Country;
}

export class Employee implements IEmployee {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public phoneNumber?: string,
    public hireDate?: Moment,
    public ibanNo?: number,
    public company?: Company,
    public language?: Language,
    public streetAddress?: string,
    public postalCode?: string,
    public city?: string,
    public stateProvince?: string,
    public country?: Country
  ) {}
}
