package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePhoneSitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteId")
    public String siteId;
    public DeletePhoneSitePathParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}