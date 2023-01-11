import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyPostImport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Success" })
  success?: boolean;
}
