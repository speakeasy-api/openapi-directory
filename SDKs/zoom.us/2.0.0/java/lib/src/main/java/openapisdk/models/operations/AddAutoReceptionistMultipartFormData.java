package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddAutoReceptionistMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public AddAutoReceptionistMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_id")
    public String siteId;
    public AddAutoReceptionistMultipartFormData withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}