import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DerivedHoldingsSummary } from "./derivedholdingssummary";
import { DerivedHoldingsLinks } from "./derivedholdingslinks";



export class DerivedHoldingSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=holdingSummary", elemType: DerivedHoldingsSummary })
  holdingSummary?: DerivedHoldingsSummary[];

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: DerivedHoldingsLinks;
}
