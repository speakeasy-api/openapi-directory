package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableCheckpointFirewallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DisableCheckpointFirewallPathParams withId(String id) {
        this.id = id;
        return this;
    }
}