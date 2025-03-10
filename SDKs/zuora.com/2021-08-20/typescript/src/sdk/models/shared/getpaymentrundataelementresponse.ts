/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GETPaymentRunDataTransactionElementResponse } from "./getpaymentrundatatransactionelementresponse";
import { Expose, Type } from "class-transformer";

/**
 * The billing document type specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
 *
 * @remarks
 *
 */
export enum GETPaymentRunDataElementResponseDocumentTypeEnum {
  Invoice = "Invoice",
  DebitMemo = "DebitMemo",
}

/**
 * Indicates whether the data is processed successfully or not.
 *
 * @remarks
 *
 */
export enum GETPaymentRunDataElementResponseResultEnum {
  Processed = "Processed",
  Error = "Error",
}

export class GETPaymentRunDataElementResponse extends SpeakeasyBase {
  /**
   * The customer account ID specified in the `data` field when creating the payment run.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  /**
   * The amount specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  /**
   * The amount that is collected.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amountCollected" })
  amountCollected?: number;

  /**
   * The amount to be collected.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amountToCollect" })
  amountToCollect?: number;

  /**
   * The comment specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "comment" })
  comment?: string;

  /**
   * The billing document ID specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "documentId" })
  documentId?: string;

  /**
   * The billing document type specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "documentType" })
  documentType?: GETPaymentRunDataElementResponseDocumentTypeEnum;

  /**
   * The error code of the response.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "errorCode" })
  errorCode?: string;

  /**
   * The detailed information of the error response.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  /**
   * The payment gateway ID specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "paymentGatewayId" })
  paymentGatewayId?: string;

  /**
   * The payment method ID specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "paymentMethodId" })
  paymentMethodId?: string;

  /**
   * Indicates whether the data is processed successfully or not.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "result" })
  result?: GETPaymentRunDataElementResponseResultEnum;

  /**
   * Container for transactions that apply to the current request. Each element contains an array of the settlement/payment applied to the record.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({ elemType: GETPaymentRunDataTransactionElementResponse })
  @Expose({ name: "transactions" })
  @Type(() => GETPaymentRunDataTransactionElementResponse)
  transactions?: GETPaymentRunDataTransactionElementResponse[];
}
