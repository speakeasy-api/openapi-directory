import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProductRatePlansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlans" })
  productRatePlans?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
