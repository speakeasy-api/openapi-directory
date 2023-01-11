package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTokenRequestBody {
    @SpeakeasyMetadata("form:name=client_id")
    public String clientId;
    public CreateTokenRequestBody withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("form:name=client_secret")
    public String clientSecret;
    public CreateTokenRequestBody withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=grant_type")
    public CreateTokenRequestBodyGrantTypeEnum grantType;
    public CreateTokenRequestBody withGrantType(CreateTokenRequestBodyGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
}