import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations available to regular developers
 */
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new file association
     *
     * @remarks
     * By passing in the appropriate options, you can create a new folder
     */
    createFileAssociation(req: operations.CreateFileAssociationRequest, security: operations.CreateFileAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.CreateFileAssociationResponse>;
    /**
     * Creates a new folder
     *
     * @remarks
     * By passing in the appropriate properties, you can create a new folder
     */
    createFolder(req: operations.CreateFolderRequest, security: operations.CreateFolderSecurity, config?: AxiosRequestConfig): Promise<operations.CreateFolderResponse>;
    /**
     * Deletes a specific file
     *
     * @remarks
     * Delete a specific file
     */
    deleteFile(req: operations.DeleteFileRequest, security: operations.DeleteFileSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteFileResponse>;
    /**
     * Deletes an existing file association
     *
     * @remarks
     * By passing in the appropriate options, you can create a new folder
     */
    deleteFileAssociation(req: operations.DeleteFileAssociationRequest, security: operations.DeleteFileAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteFileAssociationResponse>;
    /**
     * Deletes a folder
     *
     * @remarks
     * By passing in the appropriate ID, you can delete a folder
     */
    deleteFolder(req: operations.DeleteFolderRequest, security: operations.DeleteFolderSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteFolderResponse>;
    /**
     * Retrieves an association object using a unique object ID
     *
     * @remarks
     * By passing in the appropriate options,
     */
    getAssociationsByObject(req: operations.GetAssociationsByObjectRequest, security: operations.GetAssociationsByObjectSecurity, config?: AxiosRequestConfig): Promise<operations.GetAssociationsByObjectResponse>;
    /**
     * Retrieves a file by a unique file ID
     */
    getFile(req: operations.GetFileRequest, security: operations.GetFileSecurity, config?: AxiosRequestConfig): Promise<operations.GetFileResponse>;
    /**
     * Retrieves a specific file associations
     *
     * @remarks
     * By passing in the appropriate options,
     *
     */
    getFileAssociations(req: operations.GetFileAssociationsRequest, security: operations.GetFileAssociationsSecurity, config?: AxiosRequestConfig): Promise<operations.GetFileAssociationsResponse>;
    /**
     * Retrieves the content of a specific file
     *
     * @remarks
     * By passing in the appropriate options, retrieve data for specific file
     */
    getFileContent(req: operations.GetFileContentRequest, security: operations.GetFileContentSecurity, config?: AxiosRequestConfig): Promise<operations.GetFileContentResponse>;
    /**
     * Retrieves files
     */
    getFiles(req: operations.GetFilesRequest, security: operations.GetFilesSecurity, config?: AxiosRequestConfig): Promise<operations.GetFilesResponse>;
    /**
     * Retrieves specific folder by using a unique folder ID
     *
     * @remarks
     * By passing in the appropriate ID, you can search for specific folder
     */
    getFolder(req: operations.GetFolderRequest, security: operations.GetFolderSecurity, config?: AxiosRequestConfig): Promise<operations.GetFolderResponse>;
    /**
     * Retrieves folders
     *
     * @remarks
     * By passing in the appropriate options, you can search for available folders
     */
    getFolders(req: operations.GetFoldersRequest, security: operations.GetFoldersSecurity, config?: AxiosRequestConfig): Promise<operations.GetFoldersResponse>;
    /**
     * Retrieves inbox folder
     *
     * @remarks
     * Search for the user inbox
     */
    getInbox(req: operations.GetInboxRequest, security: operations.GetInboxSecurity, config?: AxiosRequestConfig): Promise<operations.GetInboxResponse>;
    /**
     * Update a file
     *
     * @remarks
     * Updates file properties of a single file
     */
    updateFile(req: operations.UpdateFileRequest, security: operations.UpdateFileSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateFileResponse>;
    /**
     * Updates an existing folder
     *
     * @remarks
     * By passing in the appropriate ID and properties, you can update a folder
     */
    updateFolder(req: operations.UpdateFolderRequest, security: operations.UpdateFolderSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateFolderResponse>;
    /**
     * Uploads a File
     */
    uploadFile(req: operations.UploadFileRequest, security: operations.UploadFileSecurity, config?: AxiosRequestConfig): Promise<operations.UploadFileResponse>;
}
