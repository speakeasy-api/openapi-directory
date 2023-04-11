import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateFeeSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * Fee sub transaction type
 */
export declare enum CreateFeeRootTypeForFeeSubTransactionTypeEnum {
    AncillaryFee = "Ancillary fee",
    ManagementFee = "Management fee",
    AdvisorOngoingFee = "Advisor ongoing fee",
    OneOffAdvisorFee = "One-off advisor fee",
    CustodyFees = "Custody fees",
    Commission = "Commission",
    FeeCredit = "Fee credit",
    FeeRebate = "Fee rebate",
    CommissionRebate = "Commission rebate"
}
/**
 * JSON for the Fee resource type
 */
export declare class CreateFeeRootTypeForFee extends SpeakeasyBase {
    /**
     * Currency of the Fee.must be a currency configured for the Pot
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
     * Fee sub transaction type
     */
    subTransactionType: CreateFeeRootTypeForFeeSubTransactionTypeEnum;
    /**
     * Fee Amount upto 2 decimal places
     */
    transactionValue: string;
}
export declare class CreateFeeRequest extends SpeakeasyBase {
    requestBody: CreateFeeRootTypeForFee;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class CreateFee500ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateFee429ApplicationJSON extends SpeakeasyBase {
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
export declare enum CreateFee409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class CreateFee409ApplicationJSON extends SpeakeasyBase {
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
    status: CreateFee409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class CreateFee404ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateFee403ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateFee401ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateFee400ApplicationJSON extends SpeakeasyBase {
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
export declare enum CreateFeeRootTypeForFeeCreationResponseDirectionEnum {
    In = "in",
    Out = "out"
}
/**
 * Origin of the transaction
 */
export declare enum CreateFeeRootTypeForFeeCreationResponseOriginEnum {
    Api = "api",
    AdminUi = "admin_ui",
    FileUpload = "file_upload",
    System = "system"
}
export declare enum CreateFeeRootTypeForFeeCreationResponsePrimaryTransactionTypeEnum {
    Fees = "Fees"
}
/**
 * Sub transaction type
 */
export declare enum CreateFeeRootTypeForFeeCreationResponseSubTransactionTypeEnum {
    AncillaryFee = "Ancillary fee",
    ManagementFee = "Management fee",
    AdvisorOngoingFee = "Advisor ongoing fee",
    OneOffAdvisorFee = "One-off advisor fee",
    CustodyFees = "Custody fees",
    Commission = "Commission",
    FeeCredit = "Fee credit",
    FeeRebate = "Fee rebate",
    CommissionRebate = "Commission rebate"
}
/**
 * Sub state of the transaction. instructed, confirmed, priced sub_types applicable for pending state and rejected, cancelled, settled sub_types applicable for archived state
 */
export declare enum CreateFeeRootTypeForFeeCreationResponseSubTypeEnum {
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
export declare enum CreateFeeRootTypeForFeeCreationResponseTypeEnum {
    Pending = "pending",
    Archived = "archived"
}
/**
 * JSON for the Fee creation response
 */
export declare class CreateFeeRootTypeForFeeCreationResponse extends SpeakeasyBase {
    /**
     * Will indicate the date where this record was created
     */
    createdAt: string;
    /**
     * Currency of the Fee
     */
    currency: string;
    /**
     * in = cash payment or pending buy transaction, out= cash out or pending sell transaction.
     */
    direction: CreateFeeRootTypeForFeeCreationResponseDirectionEnum;
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
    origin: CreateFeeRootTypeForFeeCreationResponseOriginEnum;
    /**
     * Pot ID
     */
    potId: string;
    primaryTransactionType: CreateFeeRootTypeForFeeCreationResponsePrimaryTransactionTypeEnum;
    /**
     * Intended settlement date of the pending transaction or actual the settled day of the transaction
     */
    settlementDate?: string;
    /**
     * Sub transaction type
     */
    subTransactionType: CreateFeeRootTypeForFeeCreationResponseSubTransactionTypeEnum;
    /**
     * Sub state of the transaction. instructed, confirmed, priced sub_types applicable for pending state and rejected, cancelled, settled sub_types applicable for archived state
     */
    subType: CreateFeeRootTypeForFeeCreationResponseSubTypeEnum;
    /**
     * Date the transaction was effected
     */
    tradeDate?: string;
    /**
     * Unique ID of the fee transaction
     */
    transactionId: string;
    /**
     * Fee Amount upto 2 decimal places
     */
    transactionValue: string;
    /**
     * State of the transaction
     */
    type: CreateFeeRootTypeForFeeCreationResponseTypeEnum;
    /**
     * Will indicate the date where this record was last changed
     */
    updatedAt: string;
}
export declare class CreateFeeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    rootTypeForFeeCreationResponse?: CreateFeeRootTypeForFeeCreationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    createFee400ApplicationJSONObject?: CreateFee400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    createFee401ApplicationJSONObject?: CreateFee401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    createFee403ApplicationJSONObject?: CreateFee403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    createFee404ApplicationJSONObject?: CreateFee404ApplicationJSON;
    /**
     * Duplicate request
     */
    createFee409ApplicationJSONObject?: CreateFee409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    createFee429ApplicationJSONObject?: CreateFee429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    createFee500ApplicationJSONObject?: CreateFee500ApplicationJSON;
}
