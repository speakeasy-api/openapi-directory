import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Calls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Answer call (On supported devices)
     */
    callAnswer(req: operations.CallAnswerRequest, config?: AxiosRequestConfig): Promise<operations.CallAnswerResponse>;
    /**
     * Put call on hold
     */
    callHold(req: operations.CallHoldRequest, config?: AxiosRequestConfig): Promise<operations.CallHoldResponse>;
    /**
     * Transfer call
     */
    callTransfer(req: operations.CallTransferRequest, config?: AxiosRequestConfig): Promise<operations.CallTransferResponse>;
    /**
     * Unhold
     */
    callUnold(req: operations.CallUnoldRequest, config?: AxiosRequestConfig): Promise<operations.CallUnoldResponse>;
    /**
     * Send call to voicemail
     */
    callVMTransfer(req: operations.CallVMTransferRequest, config?: AxiosRequestConfig): Promise<operations.CallVMTransferResponse>;
    /**
     * Place a call
     */
    createCall(req: shared.CallCreate, config?: AxiosRequestConfig): Promise<operations.CreateCallResponse>;
    /**
     * End a call
     */
    destroyCall(req: operations.DestroyCallRequest, config?: AxiosRequestConfig): Promise<operations.DestroyCallResponse>;
    /**
     * Get calls count
     */
    getCallsCount(req: operations.GetCallsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetCallsCountResponse>;
    /**
     * Get a call
     */
    getRoles(req: operations.GetRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetRolesResponse>;
    /**
     * List active calls
     *
     * @remarks
     * Lists currently active calls
     */
    listCalls(req: operations.ListCallsRequest, config?: AxiosRequestConfig): Promise<operations.ListCallsResponse>;
}
