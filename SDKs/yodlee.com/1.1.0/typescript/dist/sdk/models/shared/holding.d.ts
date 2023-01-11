import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { AssetClassification } from "./assetclassification";
export declare enum HoldingHoldingTypeEnum {
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
export declare enum HoldingOptionTypeEnum {
    Put = "put",
    Call = "call",
    Unknown = "unknown",
    Other = "other"
}
export declare class Holding extends SpeakeasyBase {
    accountId?: number;
    accruedIncome?: Money;
    accruedInterest?: Money;
    assetClassification?: AssetClassification[];
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
    holdingType?: HoldingHoldingTypeEnum;
    id?: number;
    interestRate?: number;
    isShort?: boolean;
    isin?: string;
    lastUpdated?: string;
    matchStatus?: string;
    maturityDate?: string;
    optionType?: HoldingOptionTypeEnum;
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
