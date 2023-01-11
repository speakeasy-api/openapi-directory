import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Usage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUsage - Retrieve a usage record
     *
     * This REST API reference describes how to retrieve usage details for an account. Usage data is returned in reverse chronological order.
     *
    **/
    getUsage(req: operations.GetUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetUsageResponse>;
    /**
     * objectDeleteUsage - CRUD: Delete a usage record
    **/
    objectDeleteUsage(req: operations.ObjectDeleteUsageRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteUsageResponse>;
    /**
     * objectGetUsage - CRUD: Retrieve a usage record
    **/
    objectGetUsage(req: operations.ObjectGetUsageRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetUsageResponse>;
    /**
     * objectPostUsage - CRUD: Create a usage record
    **/
    objectPostUsage(req: operations.ObjectPostUsageRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostUsageResponse>;
    /**
     * objectPutUsage - CRUD: Update a usage record
    **/
    objectPutUsage(req: operations.ObjectPutUsageRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutUsageResponse>;
    /**
     * postUsage - Upload a usage file
     *
     * This REST API reference describes how to post or import usage data for one or more accounts in the CSV format. There are no path or query parameters. The data is uploaded using the HTTP multipart/form-data POST method and applied to the user's tenant.
     *
     * For a use case of this operation, see [Upload usage records](https://www.zuora.com/developer/api-guides/#Upload-usage-records).
     *
     * ## How this REST API Call Works
     * The content of the uploaded usage file must follow the format used by the UI import tool. It must be a comma-separated (CSV) file with a corresponding .csv extension. The length of the file name must not exceed 50 characters. The file size must not exceed 4MB. See [Downloading the Usage Template](https://knowledgecenter.zuora.com/CB_Billing/J_Billing_Operations/Usage/C_Import_Usage_Data#Downloading_the_Usage_Template) to learn about how to download the usage file template.
     *
     * At the completion of the upload, before the file contents are actually being processed, the API returns a response containing the byte count of the received file and a URL for checking the status of the import process.  Of the five possible results displayed at that URL (Pending, Processing, Completed, Canceled, and Failed) only a Completed status indicates that the import was successful.  The operation is atomic; if any record fails, the file is rejected. In that case, the entire import is rolled back and all stored data is returned to its original state.
     *
     * To view the actual import status, enter the resulting status URL from the checkImportStatus response using a tool such as POSTMAN. This additional step provides more information about why the import has failed.
     *
     * To manage the information after a successful upload, use the web-based UI.
     *
     * ## Usage File Format
     * The usage file uses the following headings:
     *
     * | Heading         | Description   | Required |
     * |-----------------|--------|----------|
     * | ACCOUNT_ID      | Enter the account number, e.g., the default account number, such as A00000001, or your custom account number. Although this field is labeled as Account_Id, it is not the actual Account ID nor Account Name.  | Yes      |
     * | UOM             | Enter the unit of measure. This must match the UOM for the usage. | Yes      |
     * | QTY             | Enter the quantity.  | Yes      |
     * | STARTDATE       | Enter the start date of the usage. This date determines the invoice item service period the associated usage is billed to. Date format is based on locale of the current user. Default date format: `MM/DD/YYYY`. | Yes |
     * | ENDDATE         | Enter the end date of the usage. This is not used in calculations for usage billing and is optional. Date format is based on locale of the current user. Default date format: `MM/DD/YYYY`. <p>**Note:** The value of this column is optional, but the column header is required.</p> | No |
     * | SUBSCRIPTION_ID | Enter the subscription number or subscription name. If you created the subscription in the Zuora application, Zuora created a number automatically in a format similar to A-S00000001. If you do not provide a value for this field, the associated usage will be added to all subscriptions for the specified Account that use this Unit Of Measure. If your Accounts can have multiple subscriptions and you do not want double or triple counting of usage, you must specify the Subscription or Charge ID in each usage record.  <p>**Note:** The value of this column is optional, but the column header is required.</p>  | No   |
     * | CHARGE_ID       | Enter the charge number (not the charge name). You can see the charge ID, e.g., C-00000001, when you add your rate plan to your subscription and view your individual charges. If your Accounts can have multiple subscriptions and you do not want double or triple counting of usage, you must specify the specific Subscription or Charge ID in each usage record. This field is related to the Charge Number on the subscription rate plan.  <p>**Note:** The value of this column is optional, but the column header is required.</p>  | No      |
     * | DESCRIPTION     | Enter a description for the charge. | No       |
     *
    **/
    postUsage(req: operations.PostUsageRequest, config?: AxiosRequestConfig): Promise<operations.PostUsageResponse>;
}
