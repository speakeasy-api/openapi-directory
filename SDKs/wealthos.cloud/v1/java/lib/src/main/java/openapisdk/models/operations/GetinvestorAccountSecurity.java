package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetinvestorAccountSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiSecretKey apiSecretKey;
    public GetinvestorAccountSecurity withApiSecretKey(openapisdk.models.shared.SchemeApiSecretKey apiSecretKey) {
        this.apiSecretKey = apiSecretKey;
        return this;
    }
}