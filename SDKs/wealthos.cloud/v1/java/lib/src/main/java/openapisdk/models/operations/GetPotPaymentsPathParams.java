package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotPaymentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pot_id")
    public String potId;
    public GetPotPaymentsPathParams withPotId(String potId) {
        this.potId = potId;
        return this;
    }
}