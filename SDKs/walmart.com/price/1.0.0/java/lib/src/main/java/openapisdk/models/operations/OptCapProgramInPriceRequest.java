package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptCapProgramInPriceRequest {
    public OptCapProgramInPriceHeaders headers;
    public OptCapProgramInPriceRequest withHeaders(OptCapProgramInPriceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OptCapProgramInPriceRequestBody request;
    public OptCapProgramInPriceRequest withRequest(OptCapProgramInPriceRequestBody request) {
        this.request = request;
        return this;
    }
}