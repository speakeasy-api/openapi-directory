package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateASharedLineGroupMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=description")
    public String description;
    public CreateASharedLineGroupMultipartFormData withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=display_name")
    public String displayName;
    public CreateASharedLineGroupMultipartFormData withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=extension_number")
    public Long extensionNumber;
    public CreateASharedLineGroupMultipartFormData withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_id")
    public String siteId;
    public CreateASharedLineGroupMultipartFormData withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}