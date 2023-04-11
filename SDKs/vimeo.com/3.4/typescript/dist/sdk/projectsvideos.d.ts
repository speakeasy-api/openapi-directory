import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProjectsVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a specific video to a project
     *
     * @remarks
     * This method adds a single video to the specified project.
     */
    addVideoToProject(req: operations.AddVideoToProjectRequest, security: operations.AddVideoToProjectSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoToProjectResponse>;
    /**
     * Add a specific video to a project
     *
     * @remarks
     * This method adds a single video to the specified project.
     */
    addVideoToProjectAlt1(req: operations.AddVideoToProjectAlt1Request, security: operations.AddVideoToProjectAlt1Security, config?: AxiosRequestConfig): Promise<operations.AddVideoToProjectAlt1Response>;
    /**
     * Add a list of videos to a project
     *
     * @remarks
     * This method adds multiple videos to the specified project.
     */
    addVideosToProject(req: operations.AddVideosToProjectRequest, security: operations.AddVideosToProjectSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideosToProjectResponse>;
    /**
     * Add a list of videos to a project
     *
     * @remarks
     * This method adds multiple videos to the specified project.
     */
    addVideosToProjectAlt1(req: operations.AddVideosToProjectAlt1Request, security: operations.AddVideosToProjectAlt1Security, config?: AxiosRequestConfig): Promise<operations.AddVideosToProjectAlt1Response>;
    /**
     * Get all the videos in a project
     *
     * @remarks
     * This method gets all the videos that belong to the specified project.
     */
    getProjectVideos(req: operations.GetProjectVideosRequest, security: operations.GetProjectVideosSecurity, config?: AxiosRequestConfig): Promise<operations.GetProjectVideosResponse>;
    /**
     * Get all the videos in a project
     *
     * @remarks
     * This method gets all the videos that belong to the specified project.
     */
    getProjectVideosAlt1(req: operations.GetProjectVideosAlt1Request, security: operations.GetProjectVideosAlt1Security, config?: AxiosRequestConfig): Promise<operations.GetProjectVideosAlt1Response>;
    /**
     * Remove a specific video from a project
     *
     * @remarks
     * This method removes a single video from the specified project.
     */
    removeVideoFromProject(req: operations.RemoveVideoFromProjectRequest, security: operations.RemoveVideoFromProjectSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveVideoFromProjectResponse>;
    /**
     * Remove a specific video from a project
     *
     * @remarks
     * This method removes a single video from the specified project.
     */
    removeVideoFromProjectAlt1(req: operations.RemoveVideoFromProjectAlt1Request, security: operations.RemoveVideoFromProjectAlt1Security, config?: AxiosRequestConfig): Promise<operations.RemoveVideoFromProjectAlt1Response>;
    /**
     * Remove a list of videos from a project
     *
     * @remarks
     * This method removed multiple videos from the specified project.
     */
    removeVideosFromProject(req: operations.RemoveVideosFromProjectRequest, security: operations.RemoveVideosFromProjectSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveVideosFromProjectResponse>;
    /**
     * Remove a list of videos from a project
     *
     * @remarks
     * This method removed multiple videos from the specified project.
     */
    removeVideosFromProjectAlt1(req: operations.RemoveVideosFromProjectAlt1Request, security: operations.RemoveVideosFromProjectAlt1Security, config?: AxiosRequestConfig): Promise<operations.RemoveVideosFromProjectAlt1Response>;
}
