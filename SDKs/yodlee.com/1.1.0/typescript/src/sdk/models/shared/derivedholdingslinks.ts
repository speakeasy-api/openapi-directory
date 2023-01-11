import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DerivedHoldingsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=holdings" })
  holdings?: string;
}
