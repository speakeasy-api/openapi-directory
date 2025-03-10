/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MonthDetail } from "./monthdetail";
import { Expose, Type } from "class-transformer";

export class MonthDetailResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "month" })
  @Type(() => MonthDetail)
  month: MonthDetail;
}

/**
 * The budget month detail
 */
export class MonthDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => MonthDetailResponseData)
  data: MonthDetailResponseData;
}
