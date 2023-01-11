import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountingCodesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingCodes" })
  accountingCodes?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
