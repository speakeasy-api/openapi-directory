package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCrsByChargeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=charge-key")
    public String chargeKey;
    public GetCrsByChargeIdPathParams withChargeKey(String chargeKey) {
        this.chargeKey = chargeKey;
        return this;
    }
}