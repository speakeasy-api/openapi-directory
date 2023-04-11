import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExecuteBuyTrasactionSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * Definition of an single instruction(buy|sell)
 */
export declare class ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell extends SpeakeasyBase {
    /**
     * (Optional) Order identifier assigned by the wealth manager
     */
    clientOrderId?: string;
    investmentProductId: string;
    /**
     * Require if `value` is not available. Must be in correct pattern (eg: 25, 332.34, 1050.0025). For `funds`, upto 4 decimal places. For `equities`, `bonds` and `etf`, 0 decimal places allowed.
     */
    quantity?: string;
    /**
     * Require if `quantity` is not available. Must be in correct pattern (upto 2 decimal places, eg: 25, 332.3, 1050.25).
     */
    value?: string;
}
/**
 * Definition of an buy transaction request
 */
export declare class ExecuteBuyTrasactionBuyTransactionRequest extends SpeakeasyBase {
    investmentInstructions: ExecuteBuyTrasactionBuyTransactionRequestInstructionBuySell[];
    potId: string;
    /**
     * Unique request id to ensure idempotency. (ex: UUID)
     */
    requestId: string;
}
export declare class ExecuteBuyTrasactionRequest extends SpeakeasyBase {
    requestBody?: ExecuteBuyTrasactionBuyTransactionRequest;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class ExecuteBuyTrasaction500ApplicationJSON extends SpeakeasyBase {
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
export declare class ExecuteBuyTrasaction429ApplicationJSON extends SpeakeasyBase {
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
export declare enum ExecuteBuyTrasaction409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class ExecuteBuyTrasaction409ApplicationJSON extends SpeakeasyBase {
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
    status: ExecuteBuyTrasaction409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class ExecuteBuyTrasaction404ApplicationJSON extends SpeakeasyBase {
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
export declare class ExecuteBuyTrasaction403ApplicationJSON extends SpeakeasyBase {
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
export declare class ExecuteBuyTrasaction401ApplicationJSON extends SpeakeasyBase {
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
export declare class ExecuteBuyTrasaction400ApplicationJSON extends SpeakeasyBase {
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
 * status of the transaction request
 *
 * @remarks
 * . `submitted`: All requested transactions submitted
 * . `partially_submitted`: Some (but not all) requested transactions submitted
 *
 */
export declare enum ExecuteBuyTrasaction200ApplicationJSONStatusEnum {
    Submitted = "submitted",
    PartiallySubmitted = "partially_submitted"
}
/**
 * in = cash payment or pending buy transaction, out= cash out or pending sell transaction.
 */
export declare enum ExecuteBuyTrasaction200ApplicationJSONTransactionsDirectionEnum {
    In = "in",
    Out = "out"
}
/**
 * Origin of the transaction
 */
export declare enum ExecuteBuyTrasaction200ApplicationJSONTransactionsOriginEnum {
    Api = "api",
    AdminUi = "admin_ui",
    FileUpload = "file_upload",
    System = "system"
}
export declare enum ExecuteBuyTrasaction200ApplicationJSONTransactionsPrimaryTransactionTypeEnum {
    Fees = "Fees",
    Buy = "Buy",
    Sell = "Sell",
    Transfers = "Transfers",
    Income = "Income",
    Tax = "Tax",
    Contribution = "Contribution",
    Withdrawal = "Withdrawal",
    CorporateActions = "Corporate actions"
}
export declare enum ExecuteBuyTrasaction200ApplicationJSONTransactionsStatusEnum {
    Submitted = "submitted",
    Failed = "failed"
}
/**
 * Sub transaction type
 */
export declare enum ExecuteBuyTrasaction200ApplicationJSONTransactionsSubTransactionTypeEnum {
    DividendReinvestment = "Dividend Reinvestment",
    InterestReinvestment = "Interest Reinvestment",
    Reinvestment = "Reinvestment",
    Buy = "Buy",
    SellCancel = "Sell Cancel",
    SwitchBuy = "Switch Buy",
    Sell = "Sell",
    BuyCancel = "Buy Cancel",
    SwitchSell = "Switch Sell",
    LumpSum = "Lump sum",
    EmployerContribution = "Employer contribution",
    EmployeeContribution = "Employee contribution",
    RegularContribution = "Regular contribution",
    PaymentInForFees = "Payment in for fees",
    InternalTransferCashIn = "Internal Transfer - Cash In",
    InternalTransferStockIn = "Internal Transfer - Stock In",
    InternalTransferCashOut = "Internal Transfer - Cash Out",
    InternalTransferStockOut = "Internal Transfer - Stock Out",
    StockTransferIn = "Stock Transfer In",
    CashTransferIn = "Cash Transfer In",
    StockTransferOut = "Stock Transfer Out",
    CashTransferOut = "Cash Transfer Out",
    Commission = "Commission",
    AncillaryFee = "Ancillary fee",
    ManagementFee = "Management fee",
    FeeCredit = "Fee credit",
    FeeRebate = "Fee rebate",
    AdvisorOngoingFee = "Advisor ongoing fee",
    OneOffAdvisorFee = "One-off advisor fee",
    CommissionRebate = "Commission rebate",
    CustodyFees = "Custody fees",
    Dividends = "Dividends",
    Distributions = "Distributions",
    Interest = "Interest",
    OtherIncome = "Other income",
    TakeoversMergersAndNameChangesCreate = "Takeovers, Mergers & Name Changes - Create",
    TakeoversMergersAndNameChangesExtinguish = "Takeovers, Mergers & Name Changes - Extinguish",
    RightsExpiry = "Rights Expiry",
    RightsExercise = "Rights Exercise",
    WarrantExercise = "Warrant Exercise",
    FixedIncomeMaturityReceiveCapital = "Fixed Income Maturity - Receive Capital",
    FixedIncomeMaturityExtinguishBondUnits = "Fixed Income Maturity - Extinguish Bond Units",
    FundMergerCreateNewFundUnits = "Fund Merger - Create New Fund Units",
    FundMergerExtinguishOldFundUnits = "Fund Merger - Extinguish Old Fund Units",
    RightsIssue = "Rights Issue",
    StockDividend = "Stock Dividend",
    SpinOff = "Spin-Off",
    WarrantIssue = "Warrant Issue",
    StockSplit = "Stock Split",
    FeeTax = "Fee Tax",
    TaxRelief = "Tax Relief",
    Gst = "GST",
    Hst = "HST",
    Pst = "PST",
    Qst = "QST",
    WithholdingTax = "Withholding Tax",
    NonResidentTax = "Non-resident Tax",
    Penalty = "Penalty",
    ContributionRefund = "Contribution Refund",
    IncomeWithdrawal = "Income Withdrawal",
    Reversal = "Reversal",
    Withdrawal = "Withdrawal",
    MiscellaneousCorporateActionExercise = "Miscellaneous Corporate Action Exercise"
}
/**
 * Sub state of the transaction. instructed, confirmed, priced and scheduled sub_types are applicable for pending state and rejected, cancelled, settled sub_types applicable for archived state
 */
export declare enum ExecuteBuyTrasaction200ApplicationJSONTransactionsSubTypeEnum {
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
export declare enum ExecuteBuyTrasaction200ApplicationJSONTransactionsTypeEnum {
    Pending = "pending",
    Archived = "archived"
}
export declare class ExecuteBuyTrasaction200ApplicationJSONTransactions extends SpeakeasyBase {
    /**
     * Additional external details of the transaction, This may be populated in reconciliation process
     */
    additionalExternalDetails?: Record<string, any>;
    /**
     * (optional) Order identifier assigned by the wealth manager
     */
    clientOrderId?: string;
    /**
     * Will indicate the date where this record was created
     */
    createdAt: string;
    /**
     * Currency of the transaction
     */
    currency: string;
    /**
     * in = cash payment or pending buy transaction, out= cash out or pending sell transaction.
     */
    direction: ExecuteBuyTrasaction200ApplicationJSONTransactionsDirectionEnum;
    /**
     * Executed price of the buy, sell transaction
     */
    executionPrice?: string;
    /**
     * External Transaction Reference
     */
    externalTransactionReference?: string;
    /**
     * Investment product id of the transaction. Will be 'cash' for cash transaction
     */
    investmentProductId: string;
    /**
     * Origin of the transaction
     */
    origin: ExecuteBuyTrasaction200ApplicationJSONTransactionsOriginEnum;
    /**
     * parent_transaction_id
     */
    parentTransactionId?: string;
    primaryTransactionType: ExecuteBuyTrasaction200ApplicationJSONTransactionsPrimaryTransactionTypeEnum;
    /**
     * Intended settlement date of the pending transaction or actual the settled day of the transaction
     */
    settlementDate?: string;
    status: ExecuteBuyTrasaction200ApplicationJSONTransactionsStatusEnum;
    /**
     * Sub transaction type
     */
    subTransactionType: ExecuteBuyTrasaction200ApplicationJSONTransactionsSubTransactionTypeEnum;
    /**
     * Sub state of the transaction. instructed, confirmed, priced and scheduled sub_types are applicable for pending state and rejected, cancelled, settled sub_types applicable for archived state
     */
    subType: ExecuteBuyTrasaction200ApplicationJSONTransactionsSubTypeEnum;
    /**
     * Date the transaction was effected
     */
    tradeDate?: string;
    /**
     * transaction_id of successful transaction
     */
    transactionId: string;
    /**
     * (optional) quantity of the investment product, required for unit based orders
     */
    transactionQuantity?: string;
    /**
     * (optional) value of the investment product, required for value based orders
     */
    transactionValue?: string;
    /**
     * State of the transaction
     */
    type: ExecuteBuyTrasaction200ApplicationJSONTransactionsTypeEnum;
    /**
     * Will indicate the date where this record was last changed
     */
    updatedAt: string;
}
/**
 * success
 */
export declare class ExecuteBuyTrasaction200ApplicationJSON extends SpeakeasyBase {
    /**
     * error message if status is `failed`
     */
    message?: string;
    potId: string;
    /**
     * status of the transaction request
     *
     * @remarks
     * . `submitted`: All requested transactions submitted
     * . `partially_submitted`: Some (but not all) requested transactions submitted
     *
     */
    status: ExecuteBuyTrasaction200ApplicationJSONStatusEnum;
    transactions?: ExecuteBuyTrasaction200ApplicationJSONTransactions[];
}
export declare class ExecuteBuyTrasactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    executeBuyTrasaction200ApplicationJSONObject?: ExecuteBuyTrasaction200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    executeBuyTrasaction400ApplicationJSONObject?: ExecuteBuyTrasaction400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    executeBuyTrasaction401ApplicationJSONObject?: ExecuteBuyTrasaction401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    executeBuyTrasaction403ApplicationJSONObject?: ExecuteBuyTrasaction403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    executeBuyTrasaction404ApplicationJSONObject?: ExecuteBuyTrasaction404ApplicationJSON;
    /**
     * Duplicate request
     */
    executeBuyTrasaction409ApplicationJSONObject?: ExecuteBuyTrasaction409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    executeBuyTrasaction429ApplicationJSONObject?: ExecuteBuyTrasaction429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    executeBuyTrasaction500ApplicationJSONObject?: ExecuteBuyTrasaction500ApplicationJSON;
}
