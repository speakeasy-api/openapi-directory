package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotHoldingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pot_id")
    public String potId;
    public GetPotHoldingsPathParams withPotId(String potId) {
        this.potId = potId;
        return this;
    }
}