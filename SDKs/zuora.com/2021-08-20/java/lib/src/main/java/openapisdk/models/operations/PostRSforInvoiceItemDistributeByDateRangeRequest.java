package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforInvoiceItemDistributeByDateRangeRequest {
    public PostRSforInvoiceItemDistributeByDateRangePathParams pathParams;
    public PostRSforInvoiceItemDistributeByDateRangeRequest withPathParams(PostRSforInvoiceItemDistributeByDateRangePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRSforInvoiceItemDistributeByDateRangeHeaders headers;
    public PostRSforInvoiceItemDistributeByDateRangeRequest withHeaders(PostRSforInvoiceItemDistributeByDateRangeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRSforInvoiceItemDistributeByDateRangeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}