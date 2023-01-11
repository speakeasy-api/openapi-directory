package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallQueueMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=description")
    public String description;
    public CreateCallQueueMultipartFormData withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=extension_number")
    public Long extensionNumber;
    public CreateCallQueueMultipartFormData withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=members,json")
    public CreateCallQueueMultipartFormDataMembers members;
    public CreateCallQueueMultipartFormData withMembers(CreateCallQueueMultipartFormDataMembers members) {
        this.members = members;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public CreateCallQueueMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_id")
    public String siteId;
    public CreateCallQueueMultipartFormData withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}