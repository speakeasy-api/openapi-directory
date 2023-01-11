import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Holding } from "./holding";



export class HoldingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=holding", elemType: Holding })
  holding?: Holding[];
}
