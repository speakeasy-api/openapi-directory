package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneNumberDetailsMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=capability,json")
    public String[] capability;
    public UpdatePhoneNumberDetailsMultipartFormData withCapability(String[] capability) {
        this.capability = capability;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=display_name")
    public String displayName;
    public UpdatePhoneNumberDetailsMultipartFormData withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}