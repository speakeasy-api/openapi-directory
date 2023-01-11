package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCustomFieldsonRevenueItemsByRevenueScheduleRequest {
    public PutCustomFieldsonRevenueItemsByRevenueSchedulePathParams pathParams;
    public PutCustomFieldsonRevenueItemsByRevenueScheduleRequest withPathParams(PutCustomFieldsonRevenueItemsByRevenueSchedulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutCustomFieldsonRevenueItemsByRevenueScheduleHeaders headers;
    public PutCustomFieldsonRevenueItemsByRevenueScheduleRequest withHeaders(PutCustomFieldsonRevenueItemsByRevenueScheduleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutScheduleRiDetailType request;
    public PutCustomFieldsonRevenueItemsByRevenueScheduleRequest withRequest(openapisdk.models.shared.PutScheduleRiDetailType request) {
        this.request = request;
        return this;
    }
}