package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMembersOfSlgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sharedLineGroupId")
    public String sharedLineGroupId;
    public DeleteMembersOfSlgPathParams withSharedLineGroupId(String sharedLineGroupId) {
        this.sharedLineGroupId = sharedLineGroupId;
        return this;
    }
}