/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetSellersByRegionRequest extends SpeakeasyBase {
  /**
   * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
   */
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  /**
   * Type of the content being sent.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=Content-Type",
  })
  contentType: string;

  /**
   * Three letter country code refering to the `postalCode` field.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=country",
  })
  country: string;

  /**
   * Geocoordinates (first longitude, semicolon, then latitude) corresponding to the shopper's location.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=geoCoordinates",
  })
  geoCoordinates?: number[];

  /**
   * Postal code corresponding to the shopper's location.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=postalCode",
  })
  postalCode?: string;

  /**
   * ID of the region corresponding to the shopper's location.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=regionId",
  })
  regionId: string;
}

export class GetSellersByRegion200ApplicationJSONSellers extends SpeakeasyBase {
  /**
   * Seller ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Seller logo.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "logo" })
  logo?: string;

  /**
   * Seller name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * OK
 */
export class GetSellersByRegion200ApplicationJSON extends SpeakeasyBase {
  /**
   * Region ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Array with information on each seller retrieved for the given region.
   */
  @SpeakeasyMetadata({ elemType: GetSellersByRegion200ApplicationJSONSellers })
  @Expose({ name: "sellers" })
  @Type(() => GetSellersByRegion200ApplicationJSONSellers)
  sellers?: GetSellersByRegion200ApplicationJSONSellers[];
}

export class GetSellersByRegionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  getSellersByRegion200ApplicationJSONObject?: GetSellersByRegion200ApplicationJSON;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
