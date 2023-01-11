package openapisdk.models.operations;



public class DeleteRefundRequest {
    public DeleteRefundPathParams pathParams;
    public DeleteRefundRequest withPathParams(DeleteRefundPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteRefundHeaders headers;
    public DeleteRefundRequest withHeaders(DeleteRefundHeaders headers) {
        this.headers = headers;
        return this;
    }
}