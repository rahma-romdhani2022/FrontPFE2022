import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatPatientService{
    constructor(private http: HttpClient) { } 
    
    private urlGetPatientSuperieurA50 ="http://localhost:8281/patient/ageS"
    getAllPatientsSupA50(): Observable<number> {
        return this.http.get<number>(`${this.urlGetPatientSuperieurA50}`); }
     
    private urlGetPatientInfeieurA50 ="http://localhost:8281/patient/ageI"
    getAllPatientsInfA50(): Observable<number> {
        return this.http.get<number>(`${this.urlGetPatientInfeieurA50}`); }
         
    private urlPatientParMonth ="http://localhost:8281/patient/patientParMonth?month="
    getAllPatientsParMonth(month : number): Observable<number> {
        return this.http.get<number>(`${this.urlPatientParMonth + month}`); }
         

    private urlGellAllPAtientsHomme ="http://localhost:8281/patient/homme"
    getAllPatientsHomme(): Observable<number> {
        return this.http.get<number>(`${this.urlGellAllPAtientsHomme}`); }

    private urlGellAllPAtientsFemme ="http://localhost:8281/patient/femme"
    getAllPatientsFemme(): Observable<number> {
        return this.http.get<number>(`${this.urlGellAllPAtientsFemme}`); }


    private urlGellAllPAtientsNbr="http://localhost:8281/patient/nbrAll"
    getAllPatientsNumber(): Observable<number> {
        return this.http.get<number>(`${this.urlGellAllPAtientsNbr}`); }

    private urlGetAllPAtientsSainsAutoDetection ="http://localhost:8281/patient/getAllPatientSainsAutoDetection" ;
    getAllPAtientsSainsAutoDetection(): Observable<number> {
        return this.http.get<number>(`${this.urlGetAllPAtientsSainsAutoDetection}`); }

    private urlGetAllPAtientsMaladesAutoDetection ="http://localhost:8281/patient/getAllPatientMAladesAutoDetection" ;
    getAllPAtientsMAladesAutoDetection(): Observable<number> {
        return this.http.get<number>(`${this.urlGetAllPAtientsMaladesAutoDetection}`); }



    private urlGetMaladie1 ="http://localhost:8281/adminMedical/getNbrMaladie1" ;
    getAllNbrMaladie1(): Observable<number> {
    return this.http.get<number>(`${this.urlGetMaladie1}`); }

    private urlGetMaladie2 ="http://localhost:8281/adminMedical/getNbrMaladie2" ;
    getAllNbrMaladie2(): Observable<number> {
    return this.http.get<number>(`${this.urlGetMaladie2}`); }

    private urlGetMaladie3 ="http://localhost:8281/adminMedical/getNbrMaladie3" ;
    getAllNbrMaladie3(): Observable<number> {
    return this.http.get<number>(`${this.urlGetMaladie3}`); }

  
    private urlGetMaladie4 ="http://localhost:8281/adminMedical/getNbrMaladie4" ;
    getAllNbrMaladie4(): Observable<number> {
    return this.http.get<number>(`${this.urlGetMaladie4}`); }

      
    private urlGetSain ="http://localhost:8281/adminMedical/getNbrSain" ;
    getAllSain(): Observable<number> {
    return this.http.get<number>(`${this.urlGetSain}`); }
}