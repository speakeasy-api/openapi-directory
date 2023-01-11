package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCiscoSwitchSnmpConfigSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth;
    public GetCiscoSwitchSnmpConfigSecurity withApiKeyAuth(openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth) {
        this.apiKeyAuth = apiKeyAuth;
        return this;
    }
}