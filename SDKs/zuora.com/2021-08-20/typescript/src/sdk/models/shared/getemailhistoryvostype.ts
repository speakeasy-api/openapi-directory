/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GETEmailHistoryVOType } from "./getemailhistoryvotype";
import { Expose, Type } from "class-transformer";

export class GETEmailHistoryVOsType extends SpeakeasyBase {
  /**
   * A container for email histories.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({ elemType: GETEmailHistoryVOType })
  @Expose({ name: "emailHistories" })
  @Type(() => GETEmailHistoryVOType)
  emailHistories?: GETEmailHistoryVOType[];

  /**
   * URL to retrieve the next page of the response if it exists; otherwise absent.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPage" })
  nextPage?: string;

  /**
   * Returns `true` if the request was processed successfully.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "success" })
  success?: boolean;
}
