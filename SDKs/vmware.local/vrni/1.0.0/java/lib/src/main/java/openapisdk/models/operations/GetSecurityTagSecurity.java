package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSecurityTagSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth;
    public GetSecurityTagSecurity withApiKeyAuth(openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth) {
        this.apiKeyAuth = apiKeyAuth;
        return this;
    }
}