import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HoldingTypeListResponseHoldingTypeEnum {
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
export declare class HoldingTypeListResponse extends SpeakeasyBase {
    holdingType?: HoldingTypeListResponseHoldingTypeEnum[];
}
