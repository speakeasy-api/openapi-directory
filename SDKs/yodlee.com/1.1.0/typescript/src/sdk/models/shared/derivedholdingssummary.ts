import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DerivedHoldingsAccount } from "./derivedholdingsaccount";
import { DerivedHolding } from "./derivedholding";
import { Money } from "./money";



export class DerivedHoldingsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account", elemType: DerivedHoldingsAccount })
  account?: DerivedHoldingsAccount[];

  @SpeakeasyMetadata({ data: "json, name=classificationType" })
  classificationType?: string;

  @SpeakeasyMetadata({ data: "json, name=classificationValue" })
  classificationValue?: string;

  @SpeakeasyMetadata({ data: "json, name=holding", elemType: DerivedHolding })
  holding?: DerivedHolding[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Money;
}
