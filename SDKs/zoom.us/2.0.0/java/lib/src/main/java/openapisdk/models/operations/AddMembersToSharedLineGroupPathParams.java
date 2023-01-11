package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddMembersToSharedLineGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sharedLineGroupId")
    public String sharedLineGroupId;
    public AddMembersToSharedLineGroupPathParams withSharedLineGroupId(String sharedLineGroupId) {
        this.sharedLineGroupId = sharedLineGroupId;
        return this;
    }
}