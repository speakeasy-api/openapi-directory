package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateASharedLineGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sharedLineGroupId")
    public String sharedLineGroupId;
    public UpdateASharedLineGroupPathParams withSharedLineGroupId(String sharedLineGroupId) {
        this.sharedLineGroupId = sharedLineGroupId;
        return this;
    }
}