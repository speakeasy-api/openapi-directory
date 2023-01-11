import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum DataExtractsHoldingHoldingTypeEnum {
    Stock = "stock",
    MutualFund = "mutualFund",
    Bond = "bond",
    Cd = "CD",
    Option = "option",
    MoneyMarketFund = "moneyMarketFund",
    Other = "other",
    Remic = "remic",
    Future = "future",
    Commodity = "commodity",
    Currency = "currency",
    UnitInvestmentTrust = "unitInvestmentTrust",
    EmployeeStockOption = "employeeStockOption",
    InsuranceAnnuity = "insuranceAnnuity",
    Unknown = "unknown",
    PreferredStock = "preferredStock",
    Etf = "ETF",
    Warrants = "warrants",
    Etn = "ETN"
}
export declare enum DataExtractsHoldingOptionTypeEnum {
    Put = "put",
    Call = "call",
    Unknown = "unknown",
    Other = "other"
}
export declare class DataExtractsHolding extends SpeakeasyBase {
    accountId?: number;
    accruedIncome?: Money;
    accruedInterest?: Money;
    contractQuantity?: number;
    costBasis?: Money;
    couponRate?: number;
    createdDate?: string;
    cusipNumber?: string;
    description?: string;
    enrichedDescription?: string;
    exercisedQuantity?: number;
    expirationDate?: string;
    grantDate?: string;
    holdingType?: DataExtractsHoldingHoldingTypeEnum;
    id?: number;
    interestRate?: number;
    isShort?: boolean;
    isin?: string;
    lastUpdated?: string;
    matchStatus?: string;
    maturityDate?: string;
    optionType?: DataExtractsHoldingOptionTypeEnum;
    price?: Money;
    providerAccountId?: number;
    quantity?: number;
    securityStyle?: string;
    securityType?: string;
    sedol?: string;
    spread?: Money;
    strikePrice?: Money;
    symbol?: string;
    term?: string;
    unvestedQuantity?: number;
    unvestedValue?: Money;
    value?: Money;
    vestedQuantity?: number;
    vestedSharesExercisable?: number;
    vestedValue?: Money;
    vestingDate?: string;
}
