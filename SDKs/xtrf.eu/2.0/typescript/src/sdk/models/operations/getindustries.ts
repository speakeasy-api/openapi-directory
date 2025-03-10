/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetIndustriesRequest extends SpeakeasyBase {
  /**
   * client's internal identifier
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=customerId",
  })
  customerId: number;
}

export class GetIndustriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  industriesDTO?: number[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
