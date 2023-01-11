import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyUnauthorizedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
