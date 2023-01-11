package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBankAccountRequest {
    public UpdateBankAccountPathParams pathParams;
    public UpdateBankAccountRequest withPathParams(UpdateBankAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateBankAccountHeaders headers;
    public UpdateBankAccountRequest withHeaders(UpdateBankAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateBankAccountRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public UpdateBankAccountSecurity security;
    public UpdateBankAccountRequest withSecurity(UpdateBankAccountSecurity security) {
        this.security = security;
        return this;
    }
}