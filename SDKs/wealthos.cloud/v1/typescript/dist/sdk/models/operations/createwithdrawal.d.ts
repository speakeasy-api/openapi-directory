import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateWithdrawalSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * Withdrawal sub transaction type
 */
export declare enum CreateWithdrawalRootTypeForWithdrawalSubTransactionTypeEnum {
    Withdrawal = "Withdrawal"
}
/**
 * JSON for the Withdrawal resource type
 */
export declare class CreateWithdrawalRootTypeForWithdrawal extends SpeakeasyBase {
    /**
     * Bank Account ID
     */
    bankAccountId: string;
    /**
     * Currency of the Withdrawal.must be a currency configured for the Pot
     */
    currency: string;
    /**
     * Pot ID
     */
    potId: string;
    /**
     * Unique request id to ensure idempotency. (ex: UUID)
     */
    requestId: string;
    /**
     * Withdrawal sub transaction type
     */
    subTransactionType: CreateWithdrawalRootTypeForWithdrawalSubTransactionTypeEnum;
    /**
     * Withdrawal Amount upto 2 decimal places
     */
    transactionValue: string;
}
export declare class CreateWithdrawalRequest extends SpeakeasyBase {
    requestBody: CreateWithdrawalRootTypeForWithdrawal;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class CreateWithdrawal500ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
 */
export declare class CreateWithdrawal429ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Current status of the original request
 */
export declare enum CreateWithdrawal409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class CreateWithdrawal409ApplicationJSON extends SpeakeasyBase {
    /**
     * Human readable description of the error
     */
    message: string;
    /**
     * Stringified original response body if status is `COMPLETE`
     */
    response?: Record<string, any>;
    /**
     * Current status of the original request
     */
    status: CreateWithdrawal409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class CreateWithdrawal404ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
 */
export declare class CreateWithdrawal403ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You do not have permissions to access this resource.
 */
export declare class CreateWithdrawal401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Request is not complete and may have one or more validations errors. Please check the error message and the code
 */
export declare class CreateWithdrawal400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * in = cash payment or pending buy transaction, out= cash out or pending sell transaction.
 */
export declare enum CreateWithdrawalRootTypeForWithdrawalCreationResponseDirectionEnum {
    In = "in",
    Out = "out"
}
/**
 * Origin of the transaction
 */
export declare enum CreateWithdrawalRootTypeForWithdrawalCreationResponseOriginEnum {
    Api = "api",
    AdminUi = "admin_ui",
    FileUpload = "file_upload",
    System = "system"
}
export declare enum CreateWithdrawalRootTypeForWithdrawalCreationResponsePrimaryTransactionTypeEnum {
    Withdrawal = "Withdrawal"
}
/**
 * Withdrawal sub transaction type
 */
export declare enum CreateWithdrawalRootTypeForWithdrawalCreationResponseSubTransactionTypeEnum {
    Withdrawal = "Withdrawal"
}
/**
 * Sub state of the transaction. instructed, confirmed, priced sub_types applicable for pending state and rejected, cancelled, settled sub_types applicable for archived state
 */
export declare enum CreateWithdrawalRootTypeForWithdrawalCreationResponseSubTypeEnum {
    Instructed = "instructed",
    Confirmed = "confirmed",
    Priced = "priced",
    Rejected = "rejected",
    Settled = "settled",
    Cancelled = "cancelled",
    Scheduled = "scheduled"
}
/**
 * State of the transaction
 */
export declare enum CreateWithdrawalRootTypeForWithdrawalCreationResponseTypeEnum {
    Pending = "pending",
    Archived = "archived"
}
/**
 * JSON for the Withdrawal creation response
 */
export declare class CreateWithdrawalRootTypeForWithdrawalCreationResponse extends SpeakeasyBase {
    /**
     * Will indicate the date where this record was created
     */
    createdAt: string;
    /**
     * Currency of the Withdrawal
     */
    currency: string;
    /**
     * in = cash payment or pending buy transaction, out= cash out or pending sell transaction.
     */
    direction: CreateWithdrawalRootTypeForWithdrawalCreationResponseDirectionEnum;
    /**
     * External Transaction Reference
     */
    externalTransactionReference?: string;
    /**
     * investment_product_id
     */
    investmentProductId: string;
    /**
     * Origin of the transaction
     */
    origin: CreateWithdrawalRootTypeForWithdrawalCreationResponseOriginEnum;
    /**
     * Pot ID
     */
    potId: string;
    primaryTransactionType: CreateWithdrawalRootTypeForWithdrawalCreationResponsePrimaryTransactionTypeEnum;
    /**
     * Intended settlement date of the pending transaction or actual the settled day of the transaction
     */
    settlementDate?: string;
    /**
     * Withdrawal sub transaction type
     */
    subTransactionType: CreateWithdrawalRootTypeForWithdrawalCreationResponseSubTransactionTypeEnum;
    /**
     * Sub state of the transaction. instructed, confirmed, priced sub_types applicable for pending state and rejected, cancelled, settled sub_types applicable for archived state
     */
    subType: CreateWithdrawalRootTypeForWithdrawalCreationResponseSubTypeEnum;
    /**
     * Date the transaction was effected
     */
    tradeDate?: string;
    /**
     * Unique ID of the withdrawal transaction
     */
    transactionId: string;
    /**
     * Withdrawal Amount upto 2 decimal places
     */
    transactionValue: string;
    /**
     * State of the transaction
     */
    type: CreateWithdrawalRootTypeForWithdrawalCreationResponseTypeEnum;
    /**
     * Will indicate the date where this record was last changed
     */
    updatedAt: string;
}
export declare class CreateWithdrawalResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    rootTypeForWithdrawalCreationResponse?: CreateWithdrawalRootTypeForWithdrawalCreationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    createWithdrawal400ApplicationJSONObject?: CreateWithdrawal400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    createWithdrawal401ApplicationJSONObject?: CreateWithdrawal401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    createWithdrawal403ApplicationJSONObject?: CreateWithdrawal403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    createWithdrawal404ApplicationJSONObject?: CreateWithdrawal404ApplicationJSON;
    /**
     * Duplicate request
     */
    createWithdrawal409ApplicationJSONObject?: CreateWithdrawal409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    createWithdrawal429ApplicationJSONObject?: CreateWithdrawal429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    createWithdrawal500ApplicationJSONObject?: CreateWithdrawal500ApplicationJSON;
}
