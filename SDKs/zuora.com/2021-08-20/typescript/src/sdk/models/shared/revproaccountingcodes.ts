/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class RevproAccountingCodes extends SpeakeasyBase {
  /**
   * The name of the account where the Account Type is "Adjustment Liability".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "adjustmentLiabilityAccount" })
  adjustmentLiabilityAccount: string;

  /**
   * The name of the account where the Account Type is "Adjustment Revenue".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "adjustmentRevenueAccount" })
  adjustmentRevenueAccount: string;

  /**
   * The name of the account where the Account Type is "Contract Asset".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contractAssetAccount" })
  contractAssetAccount: string;

  /**
   * The name of the account where the Account Type is "Contract Liability".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contractLiabilityAccount" })
  contractLiabilityAccount: string;

  /**
   * The ID of your product rate plan charge.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "productRatePlanChargeId" })
  productRatePlanChargeId: string;

  /**
   * The name of the account where the Account Type is "Recognized Revenue".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "recognizedRevenueAccount" })
  recognizedRevenueAccount: string;

  /**
   * The name of the account where the Account Type is "Unbilled Receivables".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unbilledReceivablesAccount" })
  unbilledReceivablesAccount: string;
}
