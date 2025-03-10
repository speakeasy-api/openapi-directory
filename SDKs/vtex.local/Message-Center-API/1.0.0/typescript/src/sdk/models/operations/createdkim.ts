/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class CreateDKIMRequest extends SpeakeasyBase {
  /**
   * E-mail address for sender that was setup in VTEX mail servers
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=EmailProvider",
  })
  emailProvider: string;
}

export class CreateDKIMResponse extends SpeakeasyBase {
  /**
   * OK
   */
  @SpeakeasyMetadata()
  twoHundredOK?: Record<string, any>;

  /**
   * Unauthorized
   */
  @SpeakeasyMetadata()
  fourHundredAndOneUnauthorized?: Record<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
