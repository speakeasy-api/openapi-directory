package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePanoramaFirewallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeletePanoramaFirewallPathParams withId(String id) {
        this.id = id;
        return this;
    }
}