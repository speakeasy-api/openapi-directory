package openapisdk.models.operations;



public class GetRefundRequest {
    public GetRefundPathParams pathParams;
    public GetRefundRequest withPathParams(GetRefundPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRefundHeaders headers;
    public GetRefundRequest withHeaders(GetRefundHeaders headers) {
        this.headers = headers;
        return this;
    }
}