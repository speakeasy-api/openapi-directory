import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetZrLocationStructureSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetZrLocationStructure200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=structures" })
  structures?: string[];
}


export class GetZrLocationStructureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetZrLocationStructureSecurity;
}


export class GetZrLocationStructureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getZRLocationStructure200ApplicationJSONObject?: GetZrLocationStructure200ApplicationJson;
}
