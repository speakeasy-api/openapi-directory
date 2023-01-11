package openapisdk.models.operations;



public class ObjectGetBillRunRequest {
    public ObjectGetBillRunPathParams pathParams;
    public ObjectGetBillRunRequest withPathParams(ObjectGetBillRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetBillRunQueryParams queryParams;
    public ObjectGetBillRunRequest withQueryParams(ObjectGetBillRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetBillRunHeaders headers;
    public ObjectGetBillRunRequest withHeaders(ObjectGetBillRunHeaders headers) {
        this.headers = headers;
        return this;
    }
}