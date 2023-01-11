import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostrsaSignatureType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=pageId" })
  pageId: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
