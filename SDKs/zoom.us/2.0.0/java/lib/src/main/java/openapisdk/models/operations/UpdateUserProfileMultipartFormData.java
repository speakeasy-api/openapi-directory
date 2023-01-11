package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserProfileMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=extension_number")
    public String extensionNumber;
    public UpdateUserProfileMultipartFormData withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_id")
    public String siteId;
    public UpdateUserProfileMultipartFormData withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}