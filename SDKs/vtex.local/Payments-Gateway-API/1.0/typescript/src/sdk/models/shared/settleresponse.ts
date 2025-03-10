/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SettleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cancelledValue" })
  cancelledValue: number;

  @SpeakeasyMetadata()
  @Expose({ name: "connectorRefundedValue" })
  connectorRefundedValue: number;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "processingDate" })
  processingDate: string;

  @SpeakeasyMetadata()
  @Expose({ name: "refundedToken" })
  refundedToken: string;

  @SpeakeasyMetadata()
  @Expose({ name: "refundedValue" })
  refundedValue: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: number;

  @SpeakeasyMetadata()
  @Expose({ name: "statusDetail" })
  statusDetail: string;

  @SpeakeasyMetadata()
  @Expose({ name: "token" })
  token: string;
}
