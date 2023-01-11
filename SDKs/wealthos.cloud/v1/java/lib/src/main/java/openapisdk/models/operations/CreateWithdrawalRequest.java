package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWithdrawalRequest {
    public CreateWithdrawalHeaders headers;
    public CreateWithdrawalRequest withHeaders(CreateWithdrawalHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateWithdrawalRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public CreateWithdrawalSecurity security;
    public CreateWithdrawalRequest withSecurity(CreateWithdrawalSecurity security) {
        this.security = security;
        return this;
    }
}