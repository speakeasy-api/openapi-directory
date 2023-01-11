package openapisdk.models.operations;



public class ObjectGetContactRequest {
    public ObjectGetContactPathParams pathParams;
    public ObjectGetContactRequest withPathParams(ObjectGetContactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetContactQueryParams queryParams;
    public ObjectGetContactRequest withQueryParams(ObjectGetContactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetContactHeaders headers;
    public ObjectGetContactRequest withHeaders(ObjectGetContactHeaders headers) {
        this.headers = headers;
        return this;
    }
}