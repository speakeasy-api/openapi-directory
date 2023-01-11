import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCreditMemoCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditmemos" })
  creditmemos?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
