import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes a report.
     *
     * @remarks
     * Removes a report.
     */
    delete11(req: operations.Delete11Request, config?: AxiosRequestConfig): Promise<operations.Delete11Response>;
    /**
     * Duplicates a report.
     *
     * @remarks
     * Duplicates a report.
     */
    duplicate1(req: operations.Duplicate1Request, config?: AxiosRequestConfig): Promise<operations.Duplicate1Response>;
    /**
     * Exports reports definition to XML.
     *
     * @remarks
     * Exports reports definition to XML.
     */
    exportToXML(req: shared.ExportRequestDTO, config?: AxiosRequestConfig): Promise<operations.ExportToXMLResponse>;
    /**
     * Generates CSV content for a report.
     *
     * @remarks
     * Generates CSV content for a report.
     */
    generateCSV(req: operations.GenerateCSVRequest, config?: AxiosRequestConfig): Promise<operations.GenerateCSVResponse>;
    /**
     * Generates printer friendly content for a report.
     *
     * @remarks
     * Generates printer friendly content for a report.
     */
    generatePrinterFriendly(req: operations.GeneratePrinterFriendlyRequest, config?: AxiosRequestConfig): Promise<operations.GeneratePrinterFriendlyResponse>;
    /**
     * Imports reports definition from XML.
     *
     * @remarks
     * Imports a report definition from an XML using a file token. To obtain the token, you first need to upload a temporary XML file, as specified in the Files section. Note that the name of the imported report must be unique.
     */
    importFromXML(req: shared.ImportRequestDTO, config?: AxiosRequestConfig): Promise<operations.ImportFromXMLResponse>;
    /**
     * Marks report as preferred or not.
     *
     * @remarks
     * Marks report as preferred or not.
     */
    setPreferred(req: operations.SetPreferredRequest, config?: AxiosRequestConfig): Promise<operations.SetPreferredResponse>;
}
