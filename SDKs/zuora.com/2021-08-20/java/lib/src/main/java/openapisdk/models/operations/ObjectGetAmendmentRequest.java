package openapisdk.models.operations;



public class ObjectGetAmendmentRequest {
    public ObjectGetAmendmentPathParams pathParams;
    public ObjectGetAmendmentRequest withPathParams(ObjectGetAmendmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetAmendmentQueryParams queryParams;
    public ObjectGetAmendmentRequest withQueryParams(ObjectGetAmendmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetAmendmentHeaders headers;
    public ObjectGetAmendmentRequest withHeaders(ObjectGetAmendmentHeaders headers) {
        this.headers = headers;
        return this;
    }
}