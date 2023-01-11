package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pot_id")
    public String potId;
    public UpdatePotPathParams withPotId(String potId) {
        this.potId = potId;
        return this;
    }
}