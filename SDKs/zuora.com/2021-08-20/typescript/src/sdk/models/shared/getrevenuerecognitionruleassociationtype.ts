import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRevenueRecognitionRuleAssociationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revenueRecognitionRuleName" })
  revenueRecognitionRuleName?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
