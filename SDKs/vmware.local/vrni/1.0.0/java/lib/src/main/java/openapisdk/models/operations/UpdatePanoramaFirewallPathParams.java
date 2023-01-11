package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePanoramaFirewallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdatePanoramaFirewallPathParams withId(String id) {
        this.id = id;
        return this;
    }
}