package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAutoReceptionistMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=extension_number")
    public Long extensionNumber;
    public UpdateAutoReceptionistMultipartFormData withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public UpdateAutoReceptionistMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
}