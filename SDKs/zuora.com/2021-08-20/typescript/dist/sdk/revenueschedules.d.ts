import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RevenueSchedules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteRs - Delete a revenue schedule
     *
     * Deletes a revenue schedule by specifying its revenue schedule number
     * ## Prerequisites
     * You must have the Delete Custom Revenue Schedule permissions in Zuora Finance.
     *
     * The revenue schedule must not be associated with any invoice item, invoice item adjustment, or credit/debit memo item in Zuora Billing.
     *
    **/
    deleteRs(req: operations.DeleteRsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRsResponse>;
    /**
     * getRs - List all details of a revenue schedule
     *
     * Retrieves the details of a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
     *
    **/
    getRs(req: operations.GetRsRequest, config?: AxiosRequestConfig): Promise<operations.GetRsResponse>;
    /**
     * getRSbyCreditMemoItem - Retrieve a revenue schedule by credit memo item ID
     *
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the details about a revenue schedule by specifying a valid credit memo item ID.
     *
    **/
    getRSbyCreditMemoItem(req: operations.GetRSbyCreditMemoItemRequest, config?: AxiosRequestConfig): Promise<operations.GetRSbyCreditMemoItemResponse>;
    /**
     * getRSbyDebitMemoItem - Retrieve a revenue schedule by debit memo item ID
     *
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the details about a revenue schedule by specifying a valid debit memo item ID.
     *
    **/
    getRSbyDebitMemoItem(req: operations.GetRSbyDebitMemoItemRequest, config?: AxiosRequestConfig): Promise<operations.GetRSbyDebitMemoItemResponse>;
    /**
     * getRSbyInvoiceItem - Retrieve a revenue schedule by invoice item ID
     *
     * Retrieves the details of a revenue schedule by specifying the invoice item ID.
     *
    **/
    getRSbyInvoiceItem(req: operations.GetRSbyInvoiceItemRequest, config?: AxiosRequestConfig): Promise<operations.GetRSbyInvoiceItemResponse>;
    /**
     * getRSbyInvoiceItemAdjustment - Retrieve a revenue schedule by invoice item adjustment key
     *
     * Retrieves the details of a revenue schedule by specifying a valid invoice item adjustment identifier. Request and response field descriptions and sample code are provided.
     *
    **/
    getRSbyInvoiceItemAdjustment(req: operations.GetRSbyInvoiceItemAdjustmentRequest, config?: AxiosRequestConfig): Promise<operations.GetRSbyInvoiceItemAdjustmentResponse>;
    /**
     * getRSbyProductChargeAndBillingAccount - List revenue schedules of a product charge by charge ID and account key
     *
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Retrieves the details about all revenue schedules of a product rate plan charge by specifying the charge ID and billing account ID.
     *
    **/
    getRSbyProductChargeAndBillingAccount(req: operations.GetRSbyProductChargeAndBillingAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetRSbyProductChargeAndBillingAccountResponse>;
    /**
     * getRSforSubscCharge - List revenue schedules by subscription charge key
     *
     * Retrieves the revenue schedule details by specifying subscription charge ID. Request and response field descriptions and sample code are provided
     *
    **/
    getRSforSubscCharge(req: operations.GetRSforSubscChargeRequest, config?: AxiosRequestConfig): Promise<operations.GetRSforSubscChargeResponse>;
    /**
     * postRSforCreditMemoItemDistributeByDateRange - Create a revenue schedule for a credit memo item (distribute by date range)
     *
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates a revenue schedule for a credit memo item, and automatically distribute the revenue by specifying the recognition start and end dates.
     *
    **/
    postRSforCreditMemoItemDistributeByDateRange(req: operations.PostRSforCreditMemoItemDistributeByDateRangeRequest, config?: AxiosRequestConfig): Promise<operations.PostRSforCreditMemoItemDistributeByDateRangeResponse>;
    /**
     * postRSforCreditMemoItemManualDistribution - Create a revenue schedule for a credit memo item (manual distribution)
     *
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates a revenue schedule for a credit memo item, and manually distribute the revenue.
     *
    **/
    postRSforCreditMemoItemManualDistribution(req: operations.PostRSforCreditMemoItemManualDistributionRequest, config?: AxiosRequestConfig): Promise<operations.PostRSforCreditMemoItemManualDistributionResponse>;
    /**
     * postRSforDebitMemoItemDistributeByDateRange - Create a revenue schedule for a debit memo item (distribute by date range)
     *
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates a revenue schedule for a debit memo item, and automatically distribute the revenue by specifying the recognition start and end dates.
     *
    **/
    postRSforDebitMemoItemDistributeByDateRange(req: operations.PostRSforDebitMemoItemDistributeByDateRangeRequest, config?: AxiosRequestConfig): Promise<operations.PostRSforDebitMemoItemDistributeByDateRangeResponse>;
    /**
     * postRSforDebitMemoItemManualDistribution - Create a revenue schedule for a debit memo item (distribute by date range)
     *
     *
     * **Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * Creates a revenue schedule for a debit memo item, and manually distribute the revenue.
     *
    **/
    postRSforDebitMemoItemManualDistribution(req: operations.PostRSforDebitMemoItemManualDistributionRequest, config?: AxiosRequestConfig): Promise<operations.PostRSforDebitMemoItemManualDistributionResponse>;
    /**
     * postRSforInvoiceItemAdjustmentDistributeByDateRange - Create a revenue schedule for an invoice item adjustment (distribute by date range)
     *
     * Creates a revenue schedule for an Invoice Item Adjustment and distribute the revenue by specifying the recognition start and end dates.
     *
    **/
    postRSforInvoiceItemAdjustmentDistributeByDateRange(req: operations.PostRSforInvoiceItemAdjustmentDistributeByDateRangeRequest, config?: AxiosRequestConfig): Promise<operations.PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse>;
    /**
     * postRSforInvoiceItemAdjustmentManualDistribution - Create a revenue schedule for an invoice item adjustment (manual distribution)
     *
     * Creates a revenue schedule for an Invoice Item Adjustment and manually distribute the revenue.
     *
    **/
    postRSforInvoiceItemAdjustmentManualDistribution(req: operations.PostRSforInvoiceItemAdjustmentManualDistributionRequest, config?: AxiosRequestConfig): Promise<operations.PostRSforInvoiceItemAdjustmentManualDistributionResponse>;
    /**
     * postRSforInvoiceItemDistributeByDateRange - Create a revenue schedule for an invoice item (distribute by date range)
     *
     * Creates a revenue schedule for an Invoice Item and distribute the revenue by specifying the recognition start and end dates.
     *
    **/
    postRSforInvoiceItemDistributeByDateRange(req: operations.PostRSforInvoiceItemDistributeByDateRangeRequest, config?: AxiosRequestConfig): Promise<operations.PostRSforInvoiceItemDistributeByDateRangeResponse>;
    /**
     * postRSforInvoiceItemManualDistribution - Create a revenue schedule for an invoice item (manual distribution)
     *
     * Creates a revenue schedule for an Invoice Item and manually distribute the revenue.
     *
    **/
    postRSforInvoiceItemManualDistribution(req: operations.PostRSforInvoiceItemManualDistributionRequest, config?: AxiosRequestConfig): Promise<operations.PostRSforInvoiceItemManualDistributionResponse>;
    /**
     * postRSforSubscCharge - Create a revenue schedule by subscription charge key
     *
     * Creates a revenue schedule by specifying the subscription charge. This method is for custom unlimited revenue recognition only.
     *
     * **Note**: You can create a maximum of 3,000 revenue schedules for a subscription charge.
     *
    **/
    postRSforSubscCharge(req: operations.PostRSforSubscChargeRequest, config?: AxiosRequestConfig): Promise<operations.PostRSforSubscChargeResponse>;
    /**
     * putRsBasicInfo - Update a revenue schedule
     *
     * Retrieves basic information of a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
     *
    **/
    putRsBasicInfo(req: operations.PutRsBasicInfoRequest, config?: AxiosRequestConfig): Promise<operations.PutRsBasicInfoResponse>;
    /**
     * putRevenueAcrossAp - Distribute revenue across accounting periods
     *
     * Distributes revenue by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
     *
    **/
    putRevenueAcrossAp(req: operations.PutRevenueAcrossApRequest, config?: AxiosRequestConfig): Promise<operations.PutRevenueAcrossApResponse>;
    /**
     * putRevenueByRecognitionStartandEndDates - Distribute revenue in a recognition period
     *
     * Distributes revenue by specifying the recognition start and end dates. Request and response field descriptions and sample code are provided.
     *
    **/
    putRevenueByRecognitionStartandEndDates(req: operations.PutRevenueByRecognitionStartandEndDatesRequest, config?: AxiosRequestConfig): Promise<operations.PutRevenueByRecognitionStartandEndDatesResponse>;
    /**
     * putRevenueSpecificDate - Distribute revenue on a specific date
     *
     * Distributes revenue on a specific recognition date. Request and response field descriptions and sample code are provided.
     *
    **/
    putRevenueSpecificDate(req: operations.PutRevenueSpecificDateRequest, config?: AxiosRequestConfig): Promise<operations.PutRevenueSpecificDateResponse>;
}
