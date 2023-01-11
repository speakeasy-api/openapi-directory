package openapisdk.models.operations;



public class GetSequenceSetRequest {
    public GetSequenceSetPathParams pathParams;
    public GetSequenceSetRequest withPathParams(GetSequenceSetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSequenceSetHeaders headers;
    public GetSequenceSetRequest withHeaders(GetSequenceSetHeaders headers) {
        this.headers = headers;
        return this;
    }
}