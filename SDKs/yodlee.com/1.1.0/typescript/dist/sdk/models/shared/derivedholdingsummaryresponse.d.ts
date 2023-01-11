import { SpeakeasyBase } from "../../../internal/utils";
import { DerivedHoldingsSummary } from "./derivedholdingssummary";
import { DerivedHoldingsLinks } from "./derivedholdingslinks";
export declare class DerivedHoldingSummaryResponse extends SpeakeasyBase {
    holdingSummary?: DerivedHoldingsSummary[];
    link?: DerivedHoldingsLinks;
}
