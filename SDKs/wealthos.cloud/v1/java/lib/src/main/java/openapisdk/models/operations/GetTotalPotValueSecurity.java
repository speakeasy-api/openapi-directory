package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTotalPotValueSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiSecretKey apiSecretKey;
    public GetTotalPotValueSecurity withApiSecretKey(openapisdk.models.shared.SchemeApiSecretKey apiSecretKey) {
        this.apiSecretKey = apiSecretKey;
        return this;
    }
}