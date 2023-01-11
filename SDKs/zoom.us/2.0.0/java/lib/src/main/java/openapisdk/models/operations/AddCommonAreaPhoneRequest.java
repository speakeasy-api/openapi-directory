package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCommonAreaPhoneRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddCommonAreaPhoneRequestBody request;
    public AddCommonAreaPhoneRequest withRequest(AddCommonAreaPhoneRequestBody request) {
        this.request = request;
        return this;
    }
    public AddCommonAreaPhoneSecurity security;
    public AddCommonAreaPhoneRequest withSecurity(AddCommonAreaPhoneSecurity security) {
        this.security = security;
        return this;
    }
}