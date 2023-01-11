package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssetTypeRequest {
    public CreateAssetTypeHeaders headers;
    public CreateAssetTypeRequest withHeaders(CreateAssetTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetType request;
    public CreateAssetTypeRequest withRequest(openapisdk.models.shared.AssetType request) {
        this.request = request;
        return this;
    }
    public CreateAssetTypeSecurity security;
    public CreateAssetTypeRequest withSecurity(CreateAssetTypeSecurity security) {
        this.security = security;
        return this;
    }
}