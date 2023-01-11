import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRevenueEventDetailsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=revenueEventDetails" })
  revenueEventDetails?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
