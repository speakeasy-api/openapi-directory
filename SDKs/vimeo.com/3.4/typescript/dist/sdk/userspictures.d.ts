import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UsersPictures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a user picture
     */
    createPicture(req: operations.CreatePictureRequest, security: operations.CreatePictureSecurity, config?: AxiosRequestConfig): Promise<operations.CreatePictureResponse>;
    /**
     * Add a user picture
     */
    createPictureAlt1(config?: AxiosRequestConfig): Promise<operations.CreatePictureAlt1Response>;
    /**
     * Delete a user picture
     */
    deletePicture(req: operations.DeletePictureRequest, security: operations.DeletePictureSecurity, config?: AxiosRequestConfig): Promise<operations.DeletePictureResponse>;
    /**
     * Delete a user picture
     */
    deletePictureAlt1(req: operations.DeletePictureAlt1Request, security: operations.DeletePictureAlt1Security, config?: AxiosRequestConfig): Promise<operations.DeletePictureAlt1Response>;
    /**
     * Edit a user picture
     */
    editPicture(req: operations.EditPictureRequest, security: operations.EditPictureSecurity, config?: AxiosRequestConfig): Promise<operations.EditPictureResponse>;
    /**
     * Edit a user picture
     */
    editPictureAlt1(req: operations.EditPictureAlt1Request, security: operations.EditPictureAlt1Security, config?: AxiosRequestConfig): Promise<operations.EditPictureAlt1Response>;
    /**
     * Get a specific user picture
     */
    getPicture(req: operations.GetPictureRequest, config?: AxiosRequestConfig): Promise<operations.GetPictureResponse>;
    /**
     * Get a specific user picture
     */
    getPictureAlt1(req: operations.GetPictureAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetPictureAlt1Response>;
    /**
     * Get all the pictures that belong to a user
     */
    getPictures(req: operations.GetPicturesRequest, config?: AxiosRequestConfig): Promise<operations.GetPicturesResponse>;
    /**
     * Get all the pictures that belong to a user
     */
    getPicturesAlt1(req: operations.GetPicturesAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetPicturesAlt1Response>;
}
