package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pot_id")
    public String potId;
    public GetPotPathParams withPotId(String potId) {
        this.potId = potId;
        return this;
    }
}