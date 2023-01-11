import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { AssetClassification } from "./assetclassification";


export enum HoldingHoldingTypeEnum {
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

export enum HoldingOptionTypeEnum {
    Put = "put",
    Call = "call",
    Unknown = "unknown",
    Other = "other"
}


export class Holding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=accruedIncome" })
  accruedIncome?: Money;

  @SpeakeasyMetadata({ data: "json, name=accruedInterest" })
  accruedInterest?: Money;

  @SpeakeasyMetadata({ data: "json, name=assetClassification", elemType: AssetClassification })
  assetClassification?: AssetClassification[];

  @SpeakeasyMetadata({ data: "json, name=contractQuantity" })
  contractQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=costBasis" })
  costBasis?: Money;

  @SpeakeasyMetadata({ data: "json, name=couponRate" })
  couponRate?: number;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=cusipNumber" })
  cusipNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enrichedDescription" })
  enrichedDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=exercisedQuantity" })
  exercisedQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=grantDate" })
  grantDate?: string;

  @SpeakeasyMetadata({ data: "json, name=holdingType" })
  holdingType?: HoldingHoldingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interestRate" })
  interestRate?: number;

  @SpeakeasyMetadata({ data: "json, name=isShort" })
  isShort?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isin" })
  isin?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=matchStatus" })
  matchStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=maturityDate" })
  maturityDate?: string;

  @SpeakeasyMetadata({ data: "json, name=optionType" })
  optionType?: HoldingOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Money;

  @SpeakeasyMetadata({ data: "json, name=providerAccountId" })
  providerAccountId?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=securityStyle" })
  securityStyle?: string;

  @SpeakeasyMetadata({ data: "json, name=securityType" })
  securityType?: string;

  @SpeakeasyMetadata({ data: "json, name=sedol" })
  sedol?: string;

  @SpeakeasyMetadata({ data: "json, name=spread" })
  spread?: Money;

  @SpeakeasyMetadata({ data: "json, name=strikePrice" })
  strikePrice?: Money;

  @SpeakeasyMetadata({ data: "json, name=symbol" })
  symbol?: string;

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "json, name=unvestedQuantity" })
  unvestedQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=unvestedValue" })
  unvestedValue?: Money;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Money;

  @SpeakeasyMetadata({ data: "json, name=vestedQuantity" })
  vestedQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=vestedSharesExercisable" })
  vestedSharesExercisable?: number;

  @SpeakeasyMetadata({ data: "json, name=vestedValue" })
  vestedValue?: Money;

  @SpeakeasyMetadata({ data: "json, name=vestingDate" })
  vestingDate?: string;
}
