package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCheckpointFirewallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteCheckpointFirewallPathParams withId(String id) {
        this.id = id;
        return this;
    }
}