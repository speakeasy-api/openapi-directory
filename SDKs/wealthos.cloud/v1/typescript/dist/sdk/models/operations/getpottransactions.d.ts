import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPotTransactionsSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * Sorting order; results are sorted by creation time.
 */
export declare enum GetPotTransactionsSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetPotTransactionsRequest extends SpeakeasyBase {
    /**
     * From timestamp for the query. This must be in ISO format. Eg. 2021-08-12T07:54:47.011Z. If not present the from is set to 2000-01-01T00:00:00.000Z
     */
    from?: string;
    /**
     * Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time.
     */
    pageNumber?: string;
    /**
     * Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time.
     */
    pageSize?: string;
    /**
     * Pot Id
     */
    potId: string;
    /**
     * Sorting order; results are sorted by creation time.
     */
    sort?: GetPotTransactionsSortEnum;
    /**
     * Sub transaction type of the transactions to be retrieved from the API
     */
    subTransactionType?: string;
    /**
     * To timestamp for the query. This must be in ISO format. Eg. 2021-08-12T07:54:47.011Z. If not present the to is set to current time.
     */
    to?: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetPotTransactions500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPotTransactions429ApplicationJSON extends SpeakeasyBase {
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
 * The specified resource was not found
 */
export declare class GetPotTransactions404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPotTransactions403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPotTransactions401ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetPotTransactions200ApplicationJSONTransactionsDirectionEnum {
    In = "in",
    Out = "out"
}
/**
 * Origin of the transaction
 */
export declare enum GetPotTransactions200ApplicationJSONTransactionsOriginEnum {
    Api = "api",
    AdminUi = "admin_ui",
    FileUpload = "file_upload",
    System = "system"
}
/**
 * Primary transaction type
 */
export declare enum GetPotTransactions200ApplicationJSONTransactionsPrimaryTransactionTypeEnum {
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
/**
 * Sub transaction type
 */
export declare enum GetPotTransactions200ApplicationJSONTransactionsSubTransactionTypeEnum {
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
    ServiceFees = "Service fees",
    ProductAdministrationFees = "Product administration fees",
    PortfolioManagementFees = "Portfolio management fees",
    PlatformFees = "Platform fees",
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
 * Sub state of the transaction. instructed, confirmed, priced sub_types applicable for pending state and rejected, cancelled, settled sub_types applicable for archived state
 */
export declare enum GetPotTransactions200ApplicationJSONTransactionsSubTypeEnum {
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
export declare enum GetPotTransactions200ApplicationJSONTransactionsTypeEnum {
    Pending = "pending",
    Archived = "archived"
}
export declare class GetPotTransactions200ApplicationJSONTransactions extends SpeakeasyBase {
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
    direction: GetPotTransactions200ApplicationJSONTransactionsDirectionEnum;
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
    origin: GetPotTransactions200ApplicationJSONTransactionsOriginEnum;
    /**
     * Parent Transaction ID
     */
    parentTransactionId?: string;
    /**
     * Primary transaction type
     */
    primaryTransactionType: GetPotTransactions200ApplicationJSONTransactionsPrimaryTransactionTypeEnum;
    /**
     * Intended settlement date of the pending transaction or actual the settled day of the transaction
     */
    settlementDate?: string;
    /**
     * Sub transaction type
     */
    subTransactionType: GetPotTransactions200ApplicationJSONTransactionsSubTransactionTypeEnum;
    /**
     * Sub state of the transaction. instructed, confirmed, priced sub_types applicable for pending state and rejected, cancelled, settled sub_types applicable for archived state
     */
    subType: GetPotTransactions200ApplicationJSONTransactionsSubTypeEnum;
    /**
     * Date the transaction was effected
     */
    tradeDate?: string;
    /**
     * Unique ID of the transaction
     */
    transactionId: string;
    /**
     * Quantity of the investment product transaction. Will be empty for the cash transactions.
     */
    transactionQuantity?: string;
    /**
     * Value of the transaction
     */
    transactionValue?: string;
    /**
     * State of the transaction
     */
    type: GetPotTransactions200ApplicationJSONTransactionsTypeEnum;
    /**
     * Will indicate the date where this record was last changed
     */
    updatedAt: string;
}
/**
 * success
 */
export declare class GetPotTransactions200ApplicationJSON extends SpeakeasyBase {
    /**
     * This indicates the availability of the next page
     */
    nextPageAvailable: boolean;
    potId: string;
    transactions: GetPotTransactions200ApplicationJSONTransactions[];
}
export declare class GetPotTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getPotTransactions200ApplicationJSONObject?: GetPotTransactions200ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getPotTransactions401ApplicationJSONObject?: GetPotTransactions401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getPotTransactions403ApplicationJSONObject?: GetPotTransactions403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getPotTransactions404ApplicationJSONObject?: GetPotTransactions404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getPotTransactions429ApplicationJSONObject?: GetPotTransactions429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getPotTransactions500ApplicationJSONObject?: GetPotTransactions500ApplicationJSON;
}
