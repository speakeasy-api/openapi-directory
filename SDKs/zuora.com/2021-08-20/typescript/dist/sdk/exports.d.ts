import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Exports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * objectGetExport - CRUD: Retrieve an export
     *
     * Use this operation to check the status of a data source export and access the exported data.
     *
     * When you export data from Zuora, each exported file is available for download for 7 days. Data source exports (Export objects) older than 90 days are automatically deleted.
     *
    **/
    objectGetExport(req: operations.ObjectGetExportRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetExportResponse>;
    /**
     * objectPostExport - CRUD: Create an export
     *
     * Use this operation to create a data source export. After you have created a data source export, use [CRUD: Retrieve an export](https://www.zuora.com/developer/api-reference/#operation/Object_GETExport) to check the status of the data source export and access the exported data.
     *
     * ## Limits
     *
     * Zuora system enforces the following limits on data source exports:
     *
     * * The maximum processing time per export is 3 hours. If an export is executed for longer than 3 hours, it will be killed automatically.
     * * The maximum number of concurrent exports is 50 per tenant. Exports in `Pending` and `Processing` status are counted towards the concurrent export limit. Zuora system will reject the subsequent data source export requests once the concurrent export limit is reached.
     *
     * When you export data from Zuora, each exported file is available for download for 7 days. Data source exports (Export objects) older than 90 days are automatically deleted.
     *
     * **Note:** This operation supports the [Export ZOQL](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) query language. However, this operation does not support some data sources, objects, and fields in Export ZOQL queries. For full compatibility with Export ZOQL, Zuora recommends that you use the [AQuA API](https://knowledgecenter.zuora.com/DC_Developers/T_Aggregate_Query_API) instead of this operation.
     *
    **/
    objectPostExport(req: operations.ObjectPostExportRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostExportResponse>;
}
