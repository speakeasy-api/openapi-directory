package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlaceComplexBetRequest {
    public PlaceComplexBetQueryParams queryParams;
    public PlaceComplexBetRequest withQueryParams(PlaceComplexBetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PlaceComplexBetHeaders headers;
    public PlaceComplexBetRequest withHeaders(PlaceComplexBetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ComplexBetRequestBody request;
    public PlaceComplexBetRequest withRequest(openapisdk.models.shared.ComplexBetRequestBody request) {
        this.request = request;
        return this;
    }
}