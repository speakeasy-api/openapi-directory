import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AmendRequest } from "./amendrequest";



export class ProxyActionamendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: AmendRequest })
  requests?: AmendRequest[];
}
