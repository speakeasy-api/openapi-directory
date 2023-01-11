import { SpeakeasyBase } from "../../../internal/utils";
import { DerivedHoldingsAccount } from "./derivedholdingsaccount";
import { DerivedHolding } from "./derivedholding";
import { Money } from "./money";
export declare class DerivedHoldingsSummary extends SpeakeasyBase {
    account?: DerivedHoldingsAccount[];
    classificationType?: string;
    classificationValue?: string;
    holding?: DerivedHolding[];
    value?: Money;
}
