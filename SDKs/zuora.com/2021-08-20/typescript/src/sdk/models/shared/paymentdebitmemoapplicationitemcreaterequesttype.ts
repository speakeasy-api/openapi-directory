/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PaymentDebitMemoApplicationItemCreateRequestType extends SpeakeasyBase {
  /**
   * The amount of the payment associated with the specific debit memo or taxation item.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  /**
   * The ID of the specific debit memo item.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "debitMemoItemId" })
  debitMemoItemId?: string;

  /**
   * The ID of the specific taxation item.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxItemId" })
  taxItemId?: string;
}
