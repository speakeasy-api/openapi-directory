import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFiles - Retrieve a file
     *
     * Retrieve files such as export results, invoices, and accounting period reports.
     *
     * The response content type depends on the type of file that you retrieve.
     * For example, if you retrieve an invoice PDF, the value of the `Content-Type`
     * header in the response is `application/pdf;charset=UTF-8`.
     *
     * Other content types include:
     *
     * - `text/csv` for CSV files
     * - `application/msword` for Microsoft Word files
     * - `application/vnd.ms-excel` and `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
     *   for Microsoft Excel files (*.xls* and *.xlsx* respectively)
     * - `application/zip` and `application/x-gzip` for ZIP and Gzip files respectively
     * - `text/html` for HTML files
     * - `text/plain` for text files
     *
     * The response always contains character encoding information in the `Content-Type` header.
     * For example, `Content-Type: application/zip;charset=UTF-8`.
     *
     * **Note:** The maximum file size is 2,047 MB. If you have a data request that exceeds this limit, Zuora returns the following 403 response: `<security:max-object-size>2047MB</security:max-object-size>`. Submit a request at <a href="http://support.zuora.com/" target="_blank">Zuora Global Support</a> to determine if large file optimization is an option for you.
     *
    **/
    getFiles(req: operations.GetFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesResponse>;
}
