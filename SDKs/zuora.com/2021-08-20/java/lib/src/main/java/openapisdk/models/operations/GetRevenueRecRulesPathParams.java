package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevenueRecRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=charge-key")
    public String chargeKey;
    public GetRevenueRecRulesPathParams withChargeKey(String chargeKey) {
        this.chargeKey = chargeKey;
        return this;
    }
}