package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRSforSubscChargePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=charge-key")
    public String chargeKey;
    public GetRSforSubscChargePathParams withChargeKey(String chargeKey) {
        this.chargeKey = chargeKey;
        return this;
    }
}