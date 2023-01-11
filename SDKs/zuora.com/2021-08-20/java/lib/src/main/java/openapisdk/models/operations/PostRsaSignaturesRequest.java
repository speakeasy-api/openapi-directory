package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRsaSignaturesRequest {
    public PostRsaSignaturesHeaders headers;
    public PostRsaSignaturesRequest withHeaders(PostRsaSignaturesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostrsaSignatureType request;
    public PostRsaSignaturesRequest withRequest(openapisdk.models.shared.PostrsaSignatureType request) {
        this.request = request;
        return this;
    }
}