import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RevproAccountingCodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adjustmentLiabilityAccount" })
  adjustmentLiabilityAccount: string;

  @SpeakeasyMetadata({ data: "json, name=adjustmentRevenueAccount" })
  adjustmentRevenueAccount: string;

  @SpeakeasyMetadata({ data: "json, name=contractAssetAccount" })
  contractAssetAccount: string;

  @SpeakeasyMetadata({ data: "json, name=contractLiabilityAccount" })
  contractLiabilityAccount: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId: string;

  @SpeakeasyMetadata({ data: "json, name=recognizedRevenueAccount" })
  recognizedRevenueAccount: string;

  @SpeakeasyMetadata({ data: "json, name=unbilledReceivablesAccount" })
  unbilledReceivablesAccount: string;
}
