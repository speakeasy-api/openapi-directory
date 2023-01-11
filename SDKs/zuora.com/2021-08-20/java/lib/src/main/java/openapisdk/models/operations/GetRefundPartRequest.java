package openapisdk.models.operations;



public class GetRefundPartRequest {
    public GetRefundPartPathParams pathParams;
    public GetRefundPartRequest withPathParams(GetRefundPartPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRefundPartHeaders headers;
    public GetRefundPartRequest withHeaders(GetRefundPartHeaders headers) {
        this.headers = headers;
        return this;
    }
}