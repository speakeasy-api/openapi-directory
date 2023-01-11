import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetInvoiceTaxItemTypeTaxRateTypeEnum {
    Percentage = "Percentage",
    FlatFee = "FlatFee"
}


export class GetInvoiceTaxItemType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableToCreditAmount" })
  availableToCreditAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=creditAmount" })
  creditAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=exemptAmount" })
  exemptAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jurisdiction" })
  jurisdiction?: string;

  @SpeakeasyMetadata({ data: "json, name=locationCode" })
  locationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAmount" })
  paymentAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=taxCodeDescription" })
  taxCodeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=taxDate" })
  taxDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=taxRate" })
  taxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateDescription" })
  taxRateDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateType" })
  taxRateType?: GetInvoiceTaxItemTypeTaxRateTypeEnum;
}
