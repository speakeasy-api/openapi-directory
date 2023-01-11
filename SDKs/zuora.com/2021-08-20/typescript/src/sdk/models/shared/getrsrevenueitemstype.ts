import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRsRevenueItemsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=revenueItems" })
  revenueItems?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
