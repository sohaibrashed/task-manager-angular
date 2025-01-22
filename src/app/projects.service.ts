import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  BASE_URL: string = 'http://localhost:9090';
  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.BASE_URL}/api/projects`);
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>(
      this.BASE_URL + '/api/projects',
      newProject
    );
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>(
      `${this.BASE_URL}/api/projects`,
      existingProject
    );
  }

  deleteProject(projectID: number): Observable<string> {
    return this.httpClient.delete<string>(
      `${this.BASE_URL}/api/projects?ProjectID=${projectID}`
    );
  }
}
