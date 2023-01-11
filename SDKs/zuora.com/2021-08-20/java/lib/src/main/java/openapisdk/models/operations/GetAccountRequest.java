package openapisdk.models.operations;



public class GetAccountRequest {
    public GetAccountPathParams pathParams;
    public GetAccountRequest withPathParams(GetAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccountHeaders headers;
    public GetAccountRequest withHeaders(GetAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
}