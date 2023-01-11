package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRevenueByRecognitionStartandEndDatesRequest {
    public PutRevenueByRecognitionStartandEndDatesPathParams pathParams;
    public PutRevenueByRecognitionStartandEndDatesRequest withPathParams(PutRevenueByRecognitionStartandEndDatesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutRevenueByRecognitionStartandEndDatesHeaders headers;
    public PutRevenueByRecognitionStartandEndDatesRequest withHeaders(PutRevenueByRecognitionStartandEndDatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutRevenueByRecognitionStartandEndDatesRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}