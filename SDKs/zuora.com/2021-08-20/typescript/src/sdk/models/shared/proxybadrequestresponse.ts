import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyBadRequestResponseErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class ProxyBadRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: ProxyBadRequestResponseErrors })
  errors?: ProxyBadRequestResponseErrors[];

  @SpeakeasyMetadata({ data: "json, name=Success" })
  success?: boolean;
}
