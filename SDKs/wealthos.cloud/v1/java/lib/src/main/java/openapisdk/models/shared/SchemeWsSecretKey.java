package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeWsSecretKey {
    @SpeakeasyMetadata("security:name=x-token")
    public String apiKey;
    public SchemeWsSecretKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}