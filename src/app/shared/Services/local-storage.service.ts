import { Injectable } from '@angular/core';
// import { EncryptionService } from './encryption.service';
import { LocalStorageTypes } from '../types/local-storage.types';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(
    // private encryptionService: EncryptionService,
  ) { }

  // setItem(item: LocalStorageTypes, value: any): Promise<boolean> {
  //   return new Promise<boolean>((resolve) => {
  //     const string = JSON.stringify(value);

  //     this.encryptionService.encrypt(string).then((encryptedString) => {
  //       if (encryptedString) {
  //         this.setRawItem(item, encryptedString);
  //         resolve(true);
  //       }
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  //     resolve(true);
  //   });
  // }

  // setLocalItem(item: LocalStorageTypes, value: any): Promise<boolean> {
  //   const str = JSON.stringify(value);
  //   return new Promise<boolean>((resolve, reject) => {
  //     const encrypted = this.encryptionService.localEncrypt(str);
  //     localStorage.setItem(item, encrypted);
  //     resolve(true);
  //   });
  // }

  // getItem(item: LocalStorageTypes, parse?: boolean): any {
  //   const localItem = localStorage.getItem(item);

  //   if (!localItem) return '';
  //   const decryptedItem = this.encryptionService.decrypt(localItem);

  //   if (parse) {
  //     return JSON.parse(decryptedItem);

  //   } else {
  //     return decryptedItem;

  //   }
  // }

  setRawItem(item: LocalStorageTypes, value: any) {
    return localStorage.setItem(item, value);
  }

  getRawItem(item: LocalStorageTypes) {
    return localStorage.getItem(item);
  }


  clear(all?: boolean) {
    if (!all) {
      const organization = this.getRawItem('organization');
      const companyInfo = this.getRawItem('companyInfo');

      if (organization && companyInfo) {
        localStorage.clear();
        this.setRawItem('companyInfo', companyInfo);
        this.setRawItem('organization', organization);
      }
      return;
    }
    localStorage.clear();
  }

  getSavedOrgId(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('selectedOrgId');
    }
    return null;
  }
}
