package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPaymentMethodsDecryptionRequest {
    public PostPaymentMethodsDecryptionHeaders headers;
    public PostPaymentMethodsDecryptionRequest withHeaders(PostPaymentMethodsDecryptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostPaymentMethodDecryption request;
    public PostPaymentMethodsDecryptionRequest withRequest(openapisdk.models.shared.PostPaymentMethodDecryption request) {
        this.request = request;
        return this;
    }
}