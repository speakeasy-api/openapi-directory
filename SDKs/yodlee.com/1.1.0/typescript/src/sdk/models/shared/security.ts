import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StockExchangeDetail } from "./stockexchangedetail";



export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accrualMethod" })
  accrualMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=agencyFactor" })
  agencyFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=callDate" })
  callDate?: string;

  @SpeakeasyMetadata({ data: "json, name=callPrice" })
  callPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=cdscFundFlag" })
  cdscFundFlag?: boolean;

  @SpeakeasyMetadata({ data: "json, name=closedFlag" })
  closedFlag?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cusip" })
  cusip?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=federalTaxable" })
  federalTaxable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=firmEligible" })
  firmEligible?: string;

  @SpeakeasyMetadata({ data: "json, name=firstCouponDate" })
  firstCouponDate?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: number;

  @SpeakeasyMetadata({ data: "json, name=fundFamily" })
  fundFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=gicsSector" })
  gicsSector?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=incomeCurrency" })
  incomeCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=interestRate" })
  interestRate?: number;

  @SpeakeasyMetadata({ data: "json, name=isDummySecurity" })
  isDummySecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isEnvestnetDummySecurity" })
  isEnvestnetDummySecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSyntheticSecurity" })
  isSyntheticSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isin" })
  isin?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate?: string;

  @SpeakeasyMetadata({ data: "json, name=issueTypeMultiplier" })
  issueTypeMultiplier?: number;

  @SpeakeasyMetadata({ data: "json, name=lastCouponDate" })
  lastCouponDate?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=maturityDate" })
  maturityDate?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumPurchase" })
  minimumPurchase?: number;

  @SpeakeasyMetadata({ data: "json, name=moodyRating" })
  moodyRating?: string;

  @SpeakeasyMetadata({ data: "json, name=sAndPRating" })
  sAndPRating?: string;

  @SpeakeasyMetadata({ data: "json, name=sector" })
  sector?: string;

  @SpeakeasyMetadata({ data: "json, name=sedol" })
  sedol?: string;

  @SpeakeasyMetadata({ data: "json, name=shareClass" })
  shareClass?: string;

  @SpeakeasyMetadata({ data: "json, name=stateTaxable" })
  stateTaxable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stockExchangeDetails", elemType: StockExchangeDetail })
  stockExchangeDetails?: StockExchangeDetail[];

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: string;

  @SpeakeasyMetadata({ data: "json, name=subSector" })
  subSector?: string;

  @SpeakeasyMetadata({ data: "json, name=tradeCurrencyCode" })
  tradeCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
