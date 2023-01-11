import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyActiondeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
