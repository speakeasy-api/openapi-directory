import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Policy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Policy
     *
     * @remarks
     * Creates a new policy from scratch.
     */
    policyCreateOrUpdate(req: operations.PolicyCreateOrUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PolicyCreateOrUpdateResponse>;
    /**
     * Delete Policy by ID
     *
     * @remarks
     * Deletes a specific policy of the account by its ID.
     */
    policyDelete(req: operations.PolicyDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PolicyDeleteResponse>;
    /**
     * Evaluate Policies
     *
     * @remarks
     * This endpoint consults all policies and checks the ones that satisfy the request body’s conditions.
     */
    policyEvaluate(req: operations.PolicyEvaluateRequest, config?: AxiosRequestConfig): Promise<operations.PolicyEvaluateResponse>;
    /**
     * Get Policy by ID
     *
     * @remarks
     * Retrieves general information of a policy by its ID.
     */
    policyGet(req: operations.PolicyGetRequest, config?: AxiosRequestConfig): Promise<operations.PolicyGetResponse>;
    /**
     * Get Policy List
     *
     * @remarks
     * Retrieves a list of all policies in the account and general information of each policy.
     */
    policyList(req: operations.PolicyListRequest, config?: AxiosRequestConfig): Promise<operations.PolicyListResponse>;
    /**
     * Update Policy
     *
     * @remarks
     * Updates an existing policy at your account.
     */
    putApiPolicyEnginePoliciesId(req: operations.PutApiPolicyEnginePoliciesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutApiPolicyEnginePoliciesIdResponse>;
}
