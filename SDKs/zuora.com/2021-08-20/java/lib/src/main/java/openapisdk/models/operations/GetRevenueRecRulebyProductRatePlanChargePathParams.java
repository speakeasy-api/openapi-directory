package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevenueRecRulebyProductRatePlanChargePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=charge-key")
    public String chargeKey;
    public GetRevenueRecRulebyProductRatePlanChargePathParams withChargeKey(String chargeKey) {
        this.chargeKey = chargeKey;
        return this;
    }
}