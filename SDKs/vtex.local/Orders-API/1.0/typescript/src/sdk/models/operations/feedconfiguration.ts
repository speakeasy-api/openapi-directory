/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class FeedConfigurationRequest extends SpeakeasyBase {
  /**
   * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
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

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  feedConfigurationRequest: shared.FeedConfigurationRequest;
}

export class FeedConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
