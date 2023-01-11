package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBankAccountRequest {
    public CreateBankAccountHeaders headers;
    public CreateBankAccountRequest withHeaders(CreateBankAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateBankAccountRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public CreateBankAccountSecurity security;
    public CreateBankAccountRequest withSecurity(CreateBankAccountSecurity security) {
        this.security = security;
        return this;
    }
}