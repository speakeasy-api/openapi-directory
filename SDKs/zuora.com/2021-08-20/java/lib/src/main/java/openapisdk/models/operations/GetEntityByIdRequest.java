package openapisdk.models.operations;



public class GetEntityByIdRequest {
    public GetEntityByIdPathParams pathParams;
    public GetEntityByIdRequest withPathParams(GetEntityByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEntityByIdHeaders headers;
    public GetEntityByIdRequest withHeaders(GetEntityByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
}