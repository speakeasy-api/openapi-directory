/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Object that contains all coupon configuration.
 */
export class PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration extends SpeakeasyBase {
  /**
   * Coupon code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "couponCode" })
  couponCode: string;

  /**
   * Coupon expiration interval per use.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "expirationIntervalPerUse" })
  expirationIntervalPerUse: string;

  /**
   * Defines if the coupon is archived (`true`) or not (`false`).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isArchived" })
  isArchived?: boolean;

  /**
   * Maximum items per client that the coupon can be applied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maxItemsPerClient" })
  maxItemsPerClient: number;

  /**
   * utmCampaign code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "utmCampaign" })
  utmCampaign: string;

  /**
   * utmSource code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "utmSource" })
  utmSource: string;
}

export class PostApiRnbPvtMultipleCouponsRequestBody extends SpeakeasyBase {
  /**
   * Object that contains all coupon configuration.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "couponConfiguration" })
  @Type(() => PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration)
  couponConfiguration: PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration;

  /**
   * Quantity of coupons created. The value must be a minimum of `1` and at maximum `1000`. If the amount is `1`, the coupon code will be the value of the `couponCode` parameter. If the value is greater than `1`, the coupon code will receive a random suffix.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;
}

export class PostApiRnbPvtMultipleCouponsRequest extends SpeakeasyBase {
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

  @SpeakeasyMetadata({
    data: "request, media_type=application/json",
    elemType: PostApiRnbPvtMultipleCouponsRequestBody,
  })
  requestBody?: PostApiRnbPvtMultipleCouponsRequestBody[];
}

export class PostApiRnbPvtMultipleCouponsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  items?: string[];
}
