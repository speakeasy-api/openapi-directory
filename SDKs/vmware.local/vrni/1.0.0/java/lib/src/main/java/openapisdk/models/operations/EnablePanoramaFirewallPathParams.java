package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnablePanoramaFirewallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EnablePanoramaFirewallPathParams withId(String id) {
        this.id = id;
        return this;
    }
}