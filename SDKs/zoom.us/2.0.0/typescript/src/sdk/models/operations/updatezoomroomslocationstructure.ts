import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateZoomRoomsLocationStructureApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=structures" })
  structures?: string[];
}


export class UpdateZoomRoomsLocationStructureMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=structures;json=true" })
  structures?: string[];
}


export class UpdateZoomRoomsLocationStructureRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateZoomRoomsLocationStructureApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateZoomRoomsLocationStructureMultipartFormData;
}


export class UpdateZoomRoomsLocationStructureSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateZoomRoomsLocationStructureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: UpdateZoomRoomsLocationStructureRequests;

  @SpeakeasyMetadata()
  security: UpdateZoomRoomsLocationStructureSecurity;
}


export class UpdateZoomRoomsLocationStructureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateZoomRoomsLocationStructure204ApplicationJSONAny?: any;
}
