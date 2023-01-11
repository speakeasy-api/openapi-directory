import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyActioncreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objects" })
  objects: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
