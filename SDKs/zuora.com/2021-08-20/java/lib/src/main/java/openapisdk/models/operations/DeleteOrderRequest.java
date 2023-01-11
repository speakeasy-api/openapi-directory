package openapisdk.models.operations;



public class DeleteOrderRequest {
    public DeleteOrderPathParams pathParams;
    public DeleteOrderRequest withPathParams(DeleteOrderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteOrderHeaders headers;
    public DeleteOrderRequest withHeaders(DeleteOrderHeaders headers) {
        this.headers = headers;
        return this;
    }
}