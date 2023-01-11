package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetASharedLineGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sharedLineGroupId")
    public String sharedLineGroupId;
    public GetASharedLineGroupPathParams withSharedLineGroupId(String sharedLineGroupId) {
        this.sharedLineGroupId = sharedLineGroupId;
        return this;
    }
}