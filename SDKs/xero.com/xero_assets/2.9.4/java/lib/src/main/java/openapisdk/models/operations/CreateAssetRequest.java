package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssetRequest {
    public CreateAssetHeaders headers;
    public CreateAssetRequest withHeaders(CreateAssetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Asset request;
    public CreateAssetRequest withRequest(openapisdk.models.shared.Asset request) {
        this.request = request;
        return this;
    }
    public CreateAssetSecurity security;
    public CreateAssetRequest withSecurity(CreateAssetSecurity security) {
        this.security = security;
        return this;
    }
}