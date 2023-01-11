import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransactionTotal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;
}
