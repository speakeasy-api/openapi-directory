package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDecryptRsaSignaturesRequest {
    public PostDecryptRsaSignaturesHeaders headers;
    public PostDecryptRsaSignaturesRequest withHeaders(PostDecryptRsaSignaturesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostDecryptionType request;
    public PostDecryptRsaSignaturesRequest withRequest(openapisdk.models.shared.PostDecryptionType request) {
        this.request = request;
        return this;
    }
}