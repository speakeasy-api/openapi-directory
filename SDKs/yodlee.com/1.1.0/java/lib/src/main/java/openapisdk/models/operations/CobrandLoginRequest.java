package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CobrandLoginRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CobrandLoginRequest request;
    public CobrandLoginRequest withRequest(openapisdk.models.shared.CobrandLoginRequest request) {
        this.request = request;
        return this;
    }
}