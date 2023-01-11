import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Download {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGetColoredPathway - getColoredPathwayGet a colored image version of the pathway.
    **/
    getGetColoredPathway(req: operations.GetGetColoredPathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetGetColoredPathwayResponse>;
    /**
     * getGetPathwayAs - getPathwayAsDownload a pathway in the specified file format.
    **/
    getGetPathwayAs(req: operations.GetGetPathwayAsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayAsResponse>;
    /**
     * getGetXrefList - getXrefList
    **/
    getGetXrefList(req: operations.GetGetXrefListRequest, config?: AxiosRequestConfig): Promise<operations.GetGetXrefListResponse>;
}
