import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityHolding } from "./securityholding";



export class HoldingSecuritiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=holding", elemType: SecurityHolding })
  holding?: SecurityHolding[];
}
