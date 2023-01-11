package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSiteDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteId")
    public String siteId;
    public UpdateSiteDetailsPathParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}