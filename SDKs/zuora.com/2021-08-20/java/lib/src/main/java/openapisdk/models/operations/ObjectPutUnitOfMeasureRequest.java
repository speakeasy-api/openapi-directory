package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutUnitOfMeasureRequest {
    public ObjectPutUnitOfMeasurePathParams pathParams;
    public ObjectPutUnitOfMeasureRequest withPathParams(ObjectPutUnitOfMeasurePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutUnitOfMeasureQueryParams queryParams;
    public ObjectPutUnitOfMeasureRequest withQueryParams(ObjectPutUnitOfMeasureQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutUnitOfMeasureHeaders headers;
    public ObjectPutUnitOfMeasureRequest withHeaders(ObjectPutUnitOfMeasureHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyModifyUnitOfMeasure request;
    public ObjectPutUnitOfMeasureRequest withRequest(openapisdk.models.shared.ProxyModifyUnitOfMeasure request) {
        this.request = request;
        return this;
    }
}