package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetASitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteId")
    public String siteId;
    public GetASitePathParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}