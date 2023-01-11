package openapisdk.models.operations;



public class ObjectGetImportRequest {
    public ObjectGetImportPathParams pathParams;
    public ObjectGetImportRequest withPathParams(ObjectGetImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetImportQueryParams queryParams;
    public ObjectGetImportRequest withQueryParams(ObjectGetImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetImportHeaders headers;
    public ObjectGetImportRequest withHeaders(ObjectGetImportHeaders headers) {
        this.headers = headers;
        return this;
    }
}