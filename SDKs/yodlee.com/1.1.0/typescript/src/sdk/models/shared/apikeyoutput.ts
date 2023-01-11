import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiKeyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;
}
