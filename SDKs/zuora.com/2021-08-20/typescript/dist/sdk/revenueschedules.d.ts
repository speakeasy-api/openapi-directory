import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RevenueSchedules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a revenue schedule
     *
     * @remarks
     * Deletes a revenue schedule by specifying its revenue schedule number
     * ## Prerequisites
     * You must have the Delete Custom Revenue Schedule permissions in Zuora Finance.
     *
     * The revenue schedule must not be associated with any invoice item, invoice item adjustment, or credit/debit memo item in Zuora Billing.
     *
     */
    deleteRs(req: operations.DELETERSRequest, config?: AxiosRequestConfig): Promise<operations.DELETERSResponse>;
    /**
     * List all details of a revenue schedule
     *
     * @remarks
     * Retrieves the details of a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
     *
     */
    getRs(req: operations.GETRSRequest, config?: AxiosRequestConfig): Promise<operations.GETRSResponse>;
    /**
     * Retrieve a revenue schedule by credit memo item ID
     *
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the details about a revenue schedule by specifying a valid credit memo item ID.
     *
     */
    getRSbyCreditMemoItem(req: operations.GETRSbyCreditMemoItemRequest, config?: AxiosRequestConfig): Promise<operations.GETRSbyCreditMemoItemResponse>;
    /**
     * Retrieve a revenue schedule by debit memo item ID
     *
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the details about a revenue schedule by specifying a valid debit memo item ID.
     *
     */
    getRSbyDebitMemoItem(req: operations.GETRSbyDebitMemoItemRequest, config?: AxiosRequestConfig): Promise<operations.GETRSbyDebitMemoItemResponse>;
    /**
     * Retrieve a revenue schedule by invoice item ID
     *
     * @remarks
     * Retrieves the details of a revenue schedule by specifying the invoice item ID.
     *
     */
    getRSbyInvoiceItem(req: operations.GETRSbyInvoiceItemRequest, config?: AxiosRequestConfig): Promise<operations.GETRSbyInvoiceItemResponse>;
    /**
     * Retrieve a revenue schedule by invoice item adjustment key
     *
     * @remarks
     * Retrieves the details of a revenue schedule by specifying a valid invoice item adjustment identifier. Request and response field descriptions and sample code are provided.
     *
     */
    getRSbyInvoiceItemAdjustment(req: operations.GETRSbyInvoiceItemAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.GETRSbyInvoiceItemAdjustmentResponse>;
    /**
     * List revenue schedules of a product charge by charge ID and account key
     *
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the details about all revenue schedules of a product rate plan charge by specifying the charge ID and billing account ID.
     *
     */
    getRSbyProductChargeAndBillingAccount(req: operations.GETRSbyProductChargeAndBillingAccountRequest, config?: AxiosRequestConfig): Promise<operations.GETRSbyProductChargeAndBillingAccountResponse>;
    /**
     * List revenue schedules by subscription charge key
     *
     * @remarks
     * Retrieves the revenue schedule details by specifying subscription charge ID. Request and response field descriptions and sample code are provided
     *
     */
    getRSforSubscCharge(req: operations.GETRSforSubscChargeRequest, config?: AxiosRequestConfig): Promise<operations.GETRSforSubscChargeResponse>;
    /**
     * Create a revenue schedule for a credit memo item (distribute by date range)
     *
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates a revenue schedule for a credit memo item, and automatically distribute the revenue by specifying the recognition start and end dates.
     *
     */
    postRSforCreditMemoItemDistributeByDateRange(req: operations.POSTRSforCreditMemoItemDistributeByDateRangeRequest, config?: AxiosRequestConfig): Promise<operations.POSTRSforCreditMemoItemDistributeByDateRangeResponse>;
    /**
     * Create a revenue schedule for a credit memo item (manual distribution)
     *
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates a revenue schedule for a credit memo item, and manually distribute the revenue.
     *
     */
    postRSforCreditMemoItemManualDistribution(req: operations.POSTRSforCreditMemoItemManualDistributionRequest, config?: AxiosRequestConfig): Promise<operations.POSTRSforCreditMemoItemManualDistributionResponse>;
    /**
     * Create a revenue schedule for a debit memo item (distribute by date range)
     *
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates a revenue schedule for a debit memo item, and automatically distribute the revenue by specifying the recognition start and end dates.
     *
     */
    postRSforDebitMemoItemDistributeByDateRange(req: operations.POSTRSforDebitMemoItemDistributeByDateRangeRequest, config?: AxiosRequestConfig): Promise<operations.POSTRSforDebitMemoItemDistributeByDateRangeResponse>;
    /**
     * Create a revenue schedule for a debit memo item (distribute by date range)
     *
     *
     * @remarks
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates a revenue schedule for a debit memo item, and manually distribute the revenue.
     *
     */
    postRSforDebitMemoItemManualDistribution(req: operations.POSTRSforDebitMemoItemManualDistributionRequest, config?: AxiosRequestConfig): Promise<operations.POSTRSforDebitMemoItemManualDistributionResponse>;
    /**
     * Create a revenue schedule for an invoice item adjustment (distribute by date range)
     *
     * @remarks
     * Creates a revenue schedule for an Invoice Item Adjustment and distribute the revenue by specifying the recognition start and end dates.
     *
     */
    postRSforInvoiceItemAdjustmentDistributeByDateRange(req: operations.POSTRSforInvoiceItemAdjustmentDistributeByDateRangeRequest, config?: AxiosRequestConfig): Promise<operations.POSTRSforInvoiceItemAdjustmentDistributeByDateRangeResponse>;
    /**
     * Create a revenue schedule for an invoice item adjustment (manual distribution)
     *
     * @remarks
     * Creates a revenue schedule for an Invoice Item Adjustment and manually distribute the revenue.
     *
     */
    postRSforInvoiceItemAdjustmentManualDistribution(req: operations.POSTRSforInvoiceItemAdjustmentManualDistributionRequest, config?: AxiosRequestConfig): Promise<operations.POSTRSforInvoiceItemAdjustmentManualDistributionResponse>;
    /**
     * Create a revenue schedule for an invoice item (distribute by date range)
     *
     * @remarks
     * Creates a revenue schedule for an Invoice Item and distribute the revenue by specifying the recognition start and end dates.
     *
     */
    postRSforInvoiceItemDistributeByDateRange(req: operations.POSTRSforInvoiceItemDistributeByDateRangeRequest, config?: AxiosRequestConfig): Promise<operations.POSTRSforInvoiceItemDistributeByDateRangeResponse>;
    /**
     * Create a revenue schedule for an invoice item (manual distribution)
     *
     * @remarks
     * Creates a revenue schedule for an Invoice Item and manually distribute the revenue.
     *
     */
    postRSforInvoiceItemManualDistribution(req: operations.POSTRSforInvoiceItemManualDistributionRequest, config?: AxiosRequestConfig): Promise<operations.POSTRSforInvoiceItemManualDistributionResponse>;
    /**
     * Create a revenue schedule by subscription charge key
     *
     * @remarks
     * Creates a revenue schedule by specifying the subscription charge. This method is for custom unlimited revenue recognition only.
     *
     * **Note**: You can create a maximum of 3,000 revenue schedules for a subscription charge.
     *
     */
    postRSforSubscCharge(req: operations.POSTRSforSubscChargeRequest, config?: AxiosRequestConfig): Promise<operations.POSTRSforSubscChargeResponse>;
    /**
     * Update a revenue schedule
     *
     * @remarks
     * Retrieves basic information of a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
     *
     */
    putRSBasicInfo(req: operations.PUTRSBasicInfoRequest, config?: AxiosRequestConfig): Promise<operations.PUTRSBasicInfoResponse>;
    /**
     * Distribute revenue across accounting periods
     *
     * @remarks
     * Distributes revenue by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
     *
     */
    putRevenueAcrossAP(req: operations.PUTRevenueAcrossAPRequest, config?: AxiosRequestConfig): Promise<operations.PUTRevenueAcrossAPResponse>;
    /**
     * Distribute revenue in a recognition period
     *
     * @remarks
     * Distributes revenue by specifying the recognition start and end dates. Request and response field descriptions and sample code are provided.
     *
     */
    putRevenueByRecognitionStartandEndDates(req: operations.PUTRevenueByRecognitionStartandEndDatesRequest, config?: AxiosRequestConfig): Promise<operations.PUTRevenueByRecognitionStartandEndDatesResponse>;
    /**
     * Distribute revenue on a specific date
     *
     * @remarks
     * Distributes revenue on a specific recognition date. Request and response field descriptions and sample code are provided.
     *
     */
    putRevenueSpecificDate(req: operations.PUTRevenueSpecificDateRequest, config?: AxiosRequestConfig): Promise<operations.PUTRevenueSpecificDateResponse>;
}
