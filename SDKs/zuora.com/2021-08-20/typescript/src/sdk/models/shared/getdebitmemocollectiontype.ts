import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDebitMemoCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debitmemos" })
  debitmemos?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
