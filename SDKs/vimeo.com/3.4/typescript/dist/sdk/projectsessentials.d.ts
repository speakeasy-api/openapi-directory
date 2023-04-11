import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProjectsEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a project
     *
     * @remarks
     * This method creates a new project for the specified user.
     */
    createProject(req: operations.CreateProjectRequest, security: operations.CreateProjectSecurity, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * Create a project
     *
     * @remarks
     * This method creates a new project for the specified user.
     */
    createProjectAlt1(req: operations.CreateProjectAlt1RequestBody, security: operations.CreateProjectAlt1Security, config?: AxiosRequestConfig): Promise<operations.CreateProjectAlt1Response>;
    /**
     * Delete a project
     *
     * @remarks
     * This method deletes a project and optionally also the videos that it contains.
     */
    deleteProject(req: operations.DeleteProjectRequest, security: operations.DeleteProjectSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * Delete a project
     *
     * @remarks
     * This method deletes a project and optionally also the videos that it contains.
     */
    deleteProjectAlt1(req: operations.DeleteProjectAlt1Request, security: operations.DeleteProjectAlt1Security, config?: AxiosRequestConfig): Promise<operations.DeleteProjectAlt1Response>;
    /**
     * Edit a project
     *
     * @remarks
     * This method edits an existing project.
     */
    editProject(req: operations.EditProjectRequest, security: operations.EditProjectSecurity, config?: AxiosRequestConfig): Promise<operations.EditProjectResponse>;
    /**
     * Edit a project
     *
     * @remarks
     * This method edits an existing project.
     */
    editProjectAlt1(req: operations.EditProjectAlt1Request, security: operations.EditProjectAlt1Security, config?: AxiosRequestConfig): Promise<operations.EditProjectAlt1Response>;
    /**
     * Get a specific project
     *
     * @remarks
     * This method gets a single project that belongs to the specified user.
     */
    getProject(req: operations.GetProjectRequest, security: operations.GetProjectSecurity, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * Get a specific project
     *
     * @remarks
     * This method gets a single project that belongs to the specified user.
     */
    getProjectAlt1(req: operations.GetProjectAlt1Request, security: operations.GetProjectAlt1Security, config?: AxiosRequestConfig): Promise<operations.GetProjectAlt1Response>;
    /**
     * Get all the projects that belong to a user
     *
     * @remarks
     * This method gets all the projects that belong to the specified user.
     */
    getProjects(req: operations.GetProjectsRequest, security: operations.GetProjectsSecurity, config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * Get all the projects that belong to a user
     *
     * @remarks
     * This method gets all the projects that belong to the specified user.
     */
    getProjectsAlt1(req: operations.GetProjectsAlt1Request, security: operations.GetProjectsAlt1Security, config?: AxiosRequestConfig): Promise<operations.GetProjectsAlt1Response>;
}
