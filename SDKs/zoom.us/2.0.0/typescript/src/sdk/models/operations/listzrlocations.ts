import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListZrLocationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent_location_id" })
  parentLocationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class ListZrLocationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum ListZrLocations200ApplicationJsonLocationsTypeEnum {
    Country = "country",
    States = "states",
    City = "city",
    Campus = "campus",
    Building = "building",
    Floor = "floor"
}


export class ListZrLocations200ApplicationJsonLocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_location_id" })
  parentLocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListZrLocations200ApplicationJsonLocationsTypeEnum;
}


export class ListZrLocations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: ListZrLocations200ApplicationJsonLocations })
  locations?: ListZrLocations200ApplicationJsonLocations[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class ListZrLocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListZrLocationsQueryParams;

  @SpeakeasyMetadata()
  security: ListZrLocationsSecurity;
}


export class ListZrLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listZRLocations200ApplicationJSONObject?: ListZrLocations200ApplicationJson;
}
