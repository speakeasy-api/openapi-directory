package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCustomFieldsonRevenueItemsByRevenueEventRequest {
    public PutCustomFieldsonRevenueItemsByRevenueEventPathParams pathParams;
    public PutCustomFieldsonRevenueItemsByRevenueEventRequest withPathParams(PutCustomFieldsonRevenueItemsByRevenueEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutCustomFieldsonRevenueItemsByRevenueEventHeaders headers;
    public PutCustomFieldsonRevenueItemsByRevenueEventRequest withHeaders(PutCustomFieldsonRevenueItemsByRevenueEventHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutEventRiDetailType request;
    public PutCustomFieldsonRevenueItemsByRevenueEventRequest withRequest(openapisdk.models.shared.PutEventRiDetailType request) {
        this.request = request;
        return this;
    }
}