import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPaymentsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=payments" })
  payments?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
