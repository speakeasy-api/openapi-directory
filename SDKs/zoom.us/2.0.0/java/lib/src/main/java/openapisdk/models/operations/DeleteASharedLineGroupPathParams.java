package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteASharedLineGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sharedLineGroupId")
    public String sharedLineGroupId;
    public DeleteASharedLineGroupPathParams withSharedLineGroupId(String sharedLineGroupId) {
        this.sharedLineGroupId = sharedLineGroupId;
        return this;
    }
}