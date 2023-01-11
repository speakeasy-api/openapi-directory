package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiSecretKey {
    @SpeakeasyMetadata("security:name=x-api-key")
    public String apiKey;
    public SchemeApiSecretKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}