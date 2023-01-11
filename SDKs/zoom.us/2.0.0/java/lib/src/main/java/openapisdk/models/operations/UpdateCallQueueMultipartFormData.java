package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCallQueueMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=description")
    public String description;
    public UpdateCallQueueMultipartFormData withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=extension_number")
    public Long extensionNumber;
    public UpdateCallQueueMultipartFormData withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public UpdateCallQueueMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_id")
    public String siteId;
    public UpdateCallQueueMultipartFormData withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=status")
    public UpdateCallQueueMultipartFormDataStatusEnum status;
    public UpdateCallQueueMultipartFormData withStatus(UpdateCallQueueMultipartFormDataStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=timezone")
    public String timezone;
    public UpdateCallQueueMultipartFormData withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}