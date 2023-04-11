import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class VendorInvoices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new payment on the vendor account and assigns the payment to the invoice.
     *
     * @remarks
     * Creates a new payment on the vendor account and assigns the payment to the invoice.
     */
    createPayment1(req: operations.CreatePayment1Request, config?: AxiosRequestConfig): Promise<operations.CreatePayment1Response>;
    /**
     * Creates a new invoice.
     *
     * @remarks
     * Creates a new invoice from jobs. Jobs are grouped by provider and currency, therefore multiple invoices can be created.If any of the jobs cannot be invoiced (ie. it is already invoiced) then an error is reported.
     */
    create4(req: shared.ProviderInvoiceCreateDTO, config?: AxiosRequestConfig): Promise<operations.Create4Response>;
    /**
     * Removes a provider invoice.
     *
     * @remarks
     * Removes a provider invoice.
     */
    delete6(req: operations.Delete6Request, config?: AxiosRequestConfig): Promise<operations.Delete6Response>;
    /**
     * Removes a provider payment.
     *
     * @remarks
     * Removes a provider payment.
     */
    delete7(req: operations.Delete7Request, config?: AxiosRequestConfig): Promise<operations.Delete7Response>;
    /**
     * Returns vendor invoices' internal identifiers.
     *
     * @remarks
     * Returns vendor invoices' internal identifiers.
     */
    getAllIds3(req: operations.GetAllIds3Request, config?: AxiosRequestConfig): Promise<operations.GetAllIds3Response>;
    /**
     * Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
     *
     * @remarks
     * Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
     */
    getAll2(req: operations.GetAll2Request, config?: AxiosRequestConfig): Promise<operations.GetAll2Response>;
    /**
     * Returns provider invoice details.
     *
     * @remarks
     * Returns provider invoice details.
     */
    getById3(req: operations.GetById3Request, config?: AxiosRequestConfig): Promise<operations.GetById3Response>;
    /**
     * Generates provider invoice document (PDF).
     *
     * @remarks
     * Generates provider invoice document (PDF).
     */
    getDocument1(req: operations.GetDocument1Request, config?: AxiosRequestConfig): Promise<operations.GetDocument1Response>;
    /**
     * Returns all payments for the vendor invoice.
     *
     * @remarks
     * Returns all payments for the vendor invoice.
     */
    getPayments1(req: operations.GetPayments1Request, config?: AxiosRequestConfig): Promise<operations.GetPayments1Response>;
    /**
     * Sends a provider invoice.
     *
     * @remarks
     * Sends a provider invoice.
     */
    send(req: operations.SendRequest, config?: AxiosRequestConfig): Promise<operations.SendResponse>;
    /**
     * Changes invoice status to given status.
     *
     * @remarks
     * Changes invoice status to given status.
     */
    setStatus(req: operations.SetStatusRequest, config?: AxiosRequestConfig): Promise<operations.SetStatusResponse>;
}
