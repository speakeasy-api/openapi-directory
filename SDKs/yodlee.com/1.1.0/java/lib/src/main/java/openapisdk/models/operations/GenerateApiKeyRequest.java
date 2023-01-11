package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateApiKeyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiKeyRequest request;
    public GenerateApiKeyRequest withRequest(openapisdk.models.shared.ApiKeyRequest request) {
        this.request = request;
        return this;
    }
}