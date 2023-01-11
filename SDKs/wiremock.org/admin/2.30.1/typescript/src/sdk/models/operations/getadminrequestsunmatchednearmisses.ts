import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absoluteUrl" })
  absoluteUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=cookies" })
  cookies?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetAdminRequestsUnmatchedNearMisses200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nearMisses", elemType: GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses })
  nearMisses?: GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses[];
}


export class GetAdminRequestsUnmatchedNearMissesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAdminRequestsUnmatchedNearMisses200ApplicationJSONObject?: GetAdminRequestsUnmatchedNearMisses200ApplicationJson;
}
