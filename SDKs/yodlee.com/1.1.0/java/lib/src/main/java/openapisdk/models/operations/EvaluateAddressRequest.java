package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EvaluateAddressRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EvaluateAddressRequest request;
    public EvaluateAddressRequest withRequest(openapisdk.models.shared.EvaluateAddressRequest request) {
        this.request = request;
        return this;
    }
}