package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApi10CalculateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Itinerary[] request;
    public PostApi10CalculateRequest withRequest(openapisdk.models.shared.Itinerary[] request) {
        this.request = request;
        return this;
    }
}