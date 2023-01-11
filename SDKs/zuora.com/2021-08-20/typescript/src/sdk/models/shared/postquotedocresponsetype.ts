import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostQuoteDocResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
