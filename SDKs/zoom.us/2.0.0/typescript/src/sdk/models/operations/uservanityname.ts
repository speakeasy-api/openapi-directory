import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserVanityNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vanity_name" })
  vanityName: string;
}


export class UserVanityName200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=existed" })
  existed?: boolean;
}


export class UserVanityNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserVanityNameQueryParams;
}


export class UserVanityNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userVanityName200ApplicationJSONObject?: UserVanityName200ApplicationJson;
}
