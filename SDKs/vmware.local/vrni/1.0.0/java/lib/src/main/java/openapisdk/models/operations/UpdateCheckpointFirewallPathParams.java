package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCheckpointFirewallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateCheckpointFirewallPathParams withId(String id) {
        this.id = id;
        return this;
    }
}