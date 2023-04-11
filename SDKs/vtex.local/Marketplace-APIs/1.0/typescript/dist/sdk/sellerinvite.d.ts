import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Used to invite sellers and configure their accounts
 */
export declare class SellerInvite {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Accept Seller Lead
     *
     * @remarks
     * This endpoint is triggered by the seller onboarding wizard, once the seller confirms their invitation. It can be used by marketplace operators to manually accept seller leads, and carry on with their onboarding process.
     *
     * Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward:
     *
     *  From `invite` > to `Accept` > closing on `Create Seller`.
     *
     * If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.
     */
    acceptSellerLead(req: operations.AcceptSellerLeadRequest, config?: AxiosRequestConfig): Promise<operations.AcceptSellerLeadResponse>;
    /**
     * Create Seller From Lead
     *
     * @remarks
     * This endpoint is used by marketplace operators to create seller accounts. The request will only accept Seller Leads whose status is `accepted`. If they are already `connected` or `invited`, the call will not be fulfilled.
     *
     * The creation of the account at VTEX is done by an internal Billing service. There is no seller account and marketplace affiliation if you do not go through this step.
     *
     * Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward:
     *
     *  From `invite` > to `Accept` > closing on `Create Seller`.
     *
     * If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.
     */
    createSellerFromSellerLead(req: operations.CreateSellerFromSellerLeadRequest, config?: AxiosRequestConfig): Promise<operations.CreateSellerFromSellerLeadResponse>;
    /**
     * Invite Seller Lead
     *
     * @remarks
     * This API is used by marketplace operators to invite sellers to join their marketplace. The request sends an email to the seller, inviting sellers to activate their store. The invitation's link in the email is unique per user, and available for only seven days for the seller to click and begin activating their store.
     *
     * The email template is completely customizable. All email templates that VTEX sends to seller leads can be found and edited in the marketplace's VTEX Admin, on the Message Center section.
     */
    createSellerLead(req: operations.CreateSellerLeadRequest, config?: AxiosRequestConfig): Promise<operations.CreateSellerLeadResponse>;
    /**
     * List Seller Leads
     *
     * @remarks
     * This call's response includes a list of all sellers invited by the marketplace operator to join them. Retrieved results can be filtered by adding optional query fields to the request. Each seller listed includes the following information:
     *
     * - `id`
     *
     * - `createdAt`
     *
     * - `status`
     *
     * - `isConnected`
     *
     * - `sellerEmail`
     *
     * - `sellerName`
     *
     * - `salesChannel`
     *
     * - `email`
     */
    listSellerLeads(req: operations.ListSellerLeadsRequest, config?: AxiosRequestConfig): Promise<operations.ListSellerLeadsResponse>;
    /**
     * Delete Seller Lead
     *
     * @remarks
     * This endpoint permanently deletes a seller previously invited to the marketplace, if the seller has not already accepted the invitation.
     */
    removeSellerLead(req: operations.RemoveSellerLeadRequest, config?: AxiosRequestConfig): Promise<operations.RemoveSellerLeadResponse>;
    /**
     * Resend Seller Lead Invite
     *
     * @remarks
     * This endpoint allows marketplace operators to resend an invitation to a seller lead, previously invited to join their marketplace. The request will only accept Seller Leads whose status is `invited`. If they are already `connected` or `accepted`, the call will not be fulfilled.
     */
    resendSellerLeadRequest(req: operations.ResendSellerLeadRequestRequest, config?: AxiosRequestConfig): Promise<operations.ResendSellerLeadRequestResponse>;
    /**
     * Get Seller Lead's Data by Id
     *
     * @remarks
     * Marketplace operators may call this endpoint to retrieve information about a specific seller invited to the Seller Portal, by searching through their `Seller Lead Id`. To know the chosen seller's `sellerLeadId`, marketplace operators can count on the *List Sellers* endpoint's response as well. Each seller listed includes the following information:
     *
     * - `id`
     *
     * - `createdAt`
     *
     * - `status`
     *
     * - `isConnected`
     *
     * - `sellerEmail`
     *
     * - `sellerName`
     *
     * - `salesChannel`
     *
     * - `email`
     */
    retrieveSellerLead(req: operations.RetrieveSellerLeadRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveSellerLeadResponse>;
}
