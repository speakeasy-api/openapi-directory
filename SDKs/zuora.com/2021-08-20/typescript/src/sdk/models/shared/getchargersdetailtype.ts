import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetRevenueItemTypeResponse } from "./getrevenueitemtyperesponse";



export class GetChargeRsDetailType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=recognitionRuleName" })
  recognitionRuleName?: string;

  @SpeakeasyMetadata({ data: "json, name=recognizedRevenue" })
  recognizedRevenue?: string;

  @SpeakeasyMetadata({ data: "json, name=revenueItems", elemType: GetRevenueItemTypeResponse })
  revenueItems?: GetRevenueItemTypeResponse[];

  @SpeakeasyMetadata({ data: "json, name=subscriptionChargeId" })
  subscriptionChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=undistributedUnrecognizedRevenue" })
  undistributedUnrecognizedRevenue?: string;

  @SpeakeasyMetadata({ data: "json, name=unrecognizedRevenue" })
  unrecognizedRevenue?: string;
}
