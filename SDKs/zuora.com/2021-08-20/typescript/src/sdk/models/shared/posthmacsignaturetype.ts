import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PosthmacSignatureType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountKey" })
  accountKey?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pageId" })
  pageId?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
