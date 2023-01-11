package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pot_id")
    public String potId;
    public GetPotValuePathParams withPotId(String potId) {
        this.potId = potId;
        return this;
    }
}