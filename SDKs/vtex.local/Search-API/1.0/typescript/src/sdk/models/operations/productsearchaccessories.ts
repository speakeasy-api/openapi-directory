/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export const ProductSearchAccessoriesServerList = [
  "https://entelperu.{environment}.com.br/api/catalog_system/pub/products/crossselling/accessories",
] as const;

export class ProductSearchAccessoriesRequest extends SpeakeasyBase {
  /**
   * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
   */
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  /**
   * Describes the type of the content being sent.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=Content-Type",
  })
  contentType: string;

  /**
   * Product's unique identifier
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=productId",
  })
  productId: number;
}

export class ProductSearchAccessoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
