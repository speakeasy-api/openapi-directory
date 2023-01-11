package openapisdk.models.operations;



public class ObjectGetExportRequest {
    public ObjectGetExportPathParams pathParams;
    public ObjectGetExportRequest withPathParams(ObjectGetExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetExportQueryParams queryParams;
    public ObjectGetExportRequest withQueryParams(ObjectGetExportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetExportHeaders headers;
    public ObjectGetExportRequest withHeaders(ObjectGetExportHeaders headers) {
        this.headers = headers;
        return this;
    }
}