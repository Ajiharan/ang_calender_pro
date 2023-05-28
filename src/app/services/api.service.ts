import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../types/Type';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string =
    'https://e80587ea-a9c4-4c31-95cb-527d70a42d26.mock.pstmn.io';

  constructor(private http: HttpClient) {}

  getAllTasks(func: (res?: any) => void): void {
    this.http.get(`${this.baseUrl}/getAllTasks`).subscribe({
      next: (r: any) => {
        func(r);
      },
      error: (err: any) => {
        console.log('error', err);
        func();
      },
    });
  }

  getEndDate(
    body: { startDate: string; noOfDaya: number },
    func: (result?: any) => void
  ): void {
    this.http.post(`${this.baseUrl}/endDatePrediction/create`, body).subscribe({
      next: (data: any) => {
        func(data);
      },
      error: (err: Error) => {
        console.log('err', Error);
        func();
      },
    });
  }

  createTask(body: Partial<Task>, func: (success: boolean) => void): void {
    this.http.post(`${this.baseUrl}/createTask`, body).subscribe({
      next: (r: any) => {
        func(true);
      },
      error: (err) => {
        func(false);
      },
    });
  }
}
