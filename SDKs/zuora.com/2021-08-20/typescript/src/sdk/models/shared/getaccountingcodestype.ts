/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GETAccountingCodeItemWithoutSuccessType } from "./getaccountingcodeitemwithoutsuccesstype";
import { Expose, Type } from "class-transformer";

export class GETAccountingCodesType extends SpeakeasyBase {
  /**
   * An array of all the accounting codes in your chart of accounts. Each accounting code has the following fields.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({ elemType: GETAccountingCodeItemWithoutSuccessType })
  @Expose({ name: "accountingCodes" })
  @Type(() => GETAccountingCodeItemWithoutSuccessType)
  accountingCodes?: GETAccountingCodeItemWithoutSuccessType[];

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
