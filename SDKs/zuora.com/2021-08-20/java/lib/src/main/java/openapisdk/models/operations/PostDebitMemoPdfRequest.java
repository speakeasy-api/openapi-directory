package openapisdk.models.operations;



public class PostDebitMemoPdfRequest {
    public PostDebitMemoPdfPathParams pathParams;
    public PostDebitMemoPdfRequest withPathParams(PostDebitMemoPdfPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostDebitMemoPdfHeaders headers;
    public PostDebitMemoPdfRequest withHeaders(PostDebitMemoPdfHeaders headers) {
        this.headers = headers;
        return this;
    }
}