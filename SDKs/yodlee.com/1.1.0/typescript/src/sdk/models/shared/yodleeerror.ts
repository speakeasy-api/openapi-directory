import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class YodleeError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceCode" })
  referenceCode?: string;
}
