package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlaceSingleBetRequest {
    public PlaceSingleBetQueryParams queryParams;
    public PlaceSingleBetRequest withQueryParams(PlaceSingleBetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PlaceSingleBetHeaders headers;
    public PlaceSingleBetRequest withHeaders(PlaceSingleBetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SingleBetRequestBody request;
    public PlaceSingleBetRequest withRequest(openapisdk.models.shared.SingleBetRequestBody request) {
        this.request = request;
        return this;
    }
}