package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforSubscChargePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=charge-key")
    public String chargeKey;
    public PostRSforSubscChargePathParams withChargeKey(String chargeKey) {
        this.chargeKey = chargeKey;
        return this;
    }
}