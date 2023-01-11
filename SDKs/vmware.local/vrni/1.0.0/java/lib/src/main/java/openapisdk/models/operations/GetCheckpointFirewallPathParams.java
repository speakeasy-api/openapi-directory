package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCheckpointFirewallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCheckpointFirewallPathParams withId(String id) {
        this.id = id;
        return this;
    }
}