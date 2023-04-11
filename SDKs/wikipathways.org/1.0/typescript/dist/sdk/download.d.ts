import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Download {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getColoredPathwayGet a colored image version of the pathway.
     */
    getGetColoredPathway(req: operations.GetGetColoredPathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetGetColoredPathwayResponse>;
    /**
     * getPathwayAsDownload a pathway in the specified file format.
     */
    getGetPathwayAs(req: operations.GetGetPathwayAsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayAsResponse>;
    /**
     * getXrefList
     */
    getGetXrefList(req: operations.GetGetXrefListRequest, config?: AxiosRequestConfig): Promise<operations.GetGetXrefListResponse>;
}
