package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostUnitOfMeasureRequest {
    public ObjectPostUnitOfMeasureQueryParams queryParams;
    public ObjectPostUnitOfMeasureRequest withQueryParams(ObjectPostUnitOfMeasureQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostUnitOfMeasureHeaders headers;
    public ObjectPostUnitOfMeasureRequest withHeaders(ObjectPostUnitOfMeasureHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyCreateUnitOfMeasure request;
    public ObjectPostUnitOfMeasureRequest withRequest(openapisdk.models.shared.ProxyCreateUnitOfMeasure request) {
        this.request = request;
        return this;
    }
}