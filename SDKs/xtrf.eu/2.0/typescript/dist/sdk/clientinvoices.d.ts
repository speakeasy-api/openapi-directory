import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class ClientInvoices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.
     *
     * @remarks
     * Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.
     */
    createPayment(req: operations.CreatePaymentRequest, config?: AxiosRequestConfig): Promise<operations.CreatePaymentResponse>;
    /**
     * Creates a new invoice.
     *
     * @remarks
     * Creates a new invoice from tasks. Tasks are grouped by client and currency, therefore multiple invoices can be created.If any of the tasks cannot be invoiced (ie. it is already invoiced, not invoiceable, not associated with a project) then an error is reported.
     */
    create1(req: shared.CustomerInvoiceCreateDTO, config?: AxiosRequestConfig): Promise<operations.Create1Response>;
    /**
     * Removes a client invoice.
     *
     * @remarks
     * Removes a client invoice.
     */
    delete1(req: operations.Delete1Request, config?: AxiosRequestConfig): Promise<operations.Delete1Response>;
    /**
     * Removes a customer payment.
     *
     * @remarks
     * Removes a customer payment.
     */
    delete2(req: operations.Delete2Request, config?: AxiosRequestConfig): Promise<operations.Delete2Response>;
    /**
     * Generates client invoices' documents.
     *
     * @remarks
     * Generates client invoices' documents.
     */
    downloadDocuments(req: shared.DownloadDocumentsRequestDTO, config?: AxiosRequestConfig): Promise<operations.DownloadDocumentsResponse>;
    /**
     * Duplicate client invoice.
     *
     * @remarks
     * Duplicate client invoice.
     */
    duplicate(req: operations.DuplicateRequest, config?: AxiosRequestConfig): Promise<operations.DuplicateResponse>;
    /**
     * Duplicate client invoice as pro forma.
     *
     * @remarks
     * Duplicate client invoice as pro forma.
     */
    duplicateAsProForma(req: operations.DuplicateAsProFormaRequest, config?: AxiosRequestConfig): Promise<operations.DuplicateAsProFormaResponse>;
    /**
     * Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
     *
     * @remarks
     * Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
     */
    getAll(req: operations.GetAllRequest, config?: AxiosRequestConfig): Promise<operations.GetAllResponse>;
    /**
     * Returns client invoices' internal identifiers.
     *
     * @remarks
     * Returns client invoices' internal identifiers.
     */
    getAllIds(req: operations.GetAllIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllIdsResponse>;
    /**
     * Returns client invoice details.
     *
     * @remarks
     * Returns client invoice details.
     */
    getById(req: operations.GetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetByIdResponse>;
    /**
     * Returns dates of a given client invoice.
     *
     * @remarks
     * Returns dates of a given client invoice.
     */
    getDates(req: operations.GetDatesRequest, config?: AxiosRequestConfig): Promise<operations.GetDatesResponse>;
    /**
     * Generates client invoice document (PDF).
     *
     * @remarks
     * Generates client invoice document (PDF).
     */
    getDocument(req: operations.GetDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentResponse>;
    /**
     * Returns payment terms of a given client invoice.
     *
     * @remarks
     * Returns payment terms of a given client invoice.
     */
    getPaymentTerms(req: operations.GetPaymentTermsRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentTermsResponse>;
    /**
     * Returns all payments for the client invoice.
     *
     * @remarks
     * Returns all payments for the client invoice.
     */
    getPayments(req: operations.GetPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentsResponse>;
    /**
     * Sends reminder.
     *
     * @remarks
     * Sends reminder.
     */
    sendReminder(req: operations.SendReminderRequest, config?: AxiosRequestConfig): Promise<operations.SendReminderResponse>;
    /**
     * Sends reminders. Returns number of sent e-mails.
     *
     * @remarks
     * Sends reminders. Returns number of sent e-mails.
     */
    sendReminders(req: shared.SendRemindersRequestDTO, config?: AxiosRequestConfig): Promise<operations.SendRemindersResponse>;
}
