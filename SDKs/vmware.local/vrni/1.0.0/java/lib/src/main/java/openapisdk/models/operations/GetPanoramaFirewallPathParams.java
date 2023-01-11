package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPanoramaFirewallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPanoramaFirewallPathParams withId(String id) {
        this.id = id;
        return this;
    }
}