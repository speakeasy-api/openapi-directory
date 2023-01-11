import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRefundCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=refunds" })
  refunds?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
