import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCreditMemoItemsListType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
