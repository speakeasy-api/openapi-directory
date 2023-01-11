package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSiteDetailsMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public UpdateSiteDetailsMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_code")
    public Long siteCode;
    public UpdateSiteDetailsMultipartFormData withSiteCode(Long siteCode) {
        this.siteCode = siteCode;
        return this;
    }
}