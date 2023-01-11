import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SequenceSets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSequenceSet - Delete a sequence set
     *
     * Deletes a specific sequence set configured for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos.
     *
     * **Note**: The Credit and Debit Memos feature is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
    **/
    deleteSequenceSet(req: operations.DeleteSequenceSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSequenceSetResponse>;
    /**
     * getSequenceSet - Retrieve a sequence set
     *
     * Retrieves information about a specific sequence set configured for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos
     *
     * **Note**: The Credit and Debit Memos feature is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
    **/
    getSequenceSet(req: operations.GetSequenceSetRequest, config?: AxiosRequestConfig): Promise<operations.GetSequenceSetResponse>;
    /**
     * getSequenceSets - List sequence sets
     *
     * Retrieves information about all sequence sets configured for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos.
     *
     * You can use query parameters to restrict the data returned in the response.
     *
     * **Note**: The Credit and Debit Memos feature is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
    **/
    getSequenceSets(req: operations.GetSequenceSetsRequest, config?: AxiosRequestConfig): Promise<operations.GetSequenceSetsResponse>;
    /**
     * postSequenceSets - Create sequence sets
     *
     * Creates sequence sets, allowing distinct numbering sequences for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos.
     *
     * You can create a maximum of 100 sequence sets in one single request. A sequence set comprises a set of custom prefixes and starting numbers that are used for billing documents to generate, and payments and refunds to create.
     *
     * See [Prefix and Numbering Configuration for Billing Documents](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Prefix_and_Numbering_Configuration_for_Billing_Documents) for more information about limitations.
     *
     * **Note**: The Credit and Debit Memos feature is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
    **/
    postSequenceSets(req: operations.PostSequenceSetsRequest, config?: AxiosRequestConfig): Promise<operations.PostSequenceSetsResponse>;
    /**
     * putSequenceSet - Update a sequence set
     *
     * Updates a specific sequence set configured for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos.
     *
     * **Note**: The Credit and Debit Memos feature is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
    **/
    putSequenceSet(req: operations.PutSequenceSetRequest, config?: AxiosRequestConfig): Promise<operations.PutSequenceSetResponse>;
}
