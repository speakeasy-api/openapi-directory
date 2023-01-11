import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DerivedTransactionsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactions" })
  transactions?: string;
}
