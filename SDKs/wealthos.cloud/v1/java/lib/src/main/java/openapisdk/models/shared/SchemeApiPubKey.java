package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiPubKey {
    @SpeakeasyMetadata("security:name=Authorization")
    public String apiKey;
    public SchemeApiPubKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}