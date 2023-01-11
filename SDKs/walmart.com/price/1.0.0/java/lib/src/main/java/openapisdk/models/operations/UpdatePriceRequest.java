package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePriceRequest {
    public UpdatePriceHeaders headers;
    public UpdatePriceRequest withHeaders(UpdatePriceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatePriceRequestBody request;
    public UpdatePriceRequest withRequest(UpdatePriceRequestBody request) {
        this.request = request;
        return this;
    }
}