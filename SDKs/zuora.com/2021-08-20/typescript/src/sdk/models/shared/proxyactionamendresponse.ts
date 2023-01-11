import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AmendResult } from "./amendresult";



export class ProxyActionamendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: AmendResult })
  results?: AmendResult[];
}
