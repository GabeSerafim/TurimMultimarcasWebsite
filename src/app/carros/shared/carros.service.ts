import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Carro} from './carro';

@Injectable()
export class CarrosService {
  protected URL = 'http://localhost:8080/carro';

  constructor(protected http: HttpClient) {
  }

  /**
   * Find an object by its identifier
   * @param id the object identifier
   * @returns gets the object found
   */
  public findById(id: any): Observable<Carro> {
    return this.http.get<Carro>(this.URL + '/' + id);
  }

  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(params?): Observable<Carro[]> {
    var req = this.http.get<Carro[]>(this.URL, {params})
    req.subscribe()
    return req
  }

  /**
   * Delete an object by its identifier field
   * @param id the object identifier
   * @returns gets the response
   */
  public delete(id): Observable<Carro> {
    return this.http.delete<Carro>(this.URL + '/' + id);
  }

  /**
   * Insert the data
   * @param data the object containing the data to be inserted
   * @returns gets the response
   */
  public insert(data: Carro): Observable<Carro> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<Carro>(this.URL, data);
  }

  /**
   * Update specific object into DB
   * @param carro the object to be updated
   * @returns gets the response
   */
  public update(carro: Carro): Observable<Carro> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    var req = this.http.put<Carro>(this.URL + '/', carro, {headers})
    return req;
  }
}
