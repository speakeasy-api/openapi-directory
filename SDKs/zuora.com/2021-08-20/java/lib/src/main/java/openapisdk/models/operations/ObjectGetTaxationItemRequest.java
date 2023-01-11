package openapisdk.models.operations;



public class ObjectGetTaxationItemRequest {
    public ObjectGetTaxationItemPathParams pathParams;
    public ObjectGetTaxationItemRequest withPathParams(ObjectGetTaxationItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetTaxationItemQueryParams queryParams;
    public ObjectGetTaxationItemRequest withQueryParams(ObjectGetTaxationItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetTaxationItemHeaders headers;
    public ObjectGetTaxationItemRequest withHeaders(ObjectGetTaxationItemHeaders headers) {
        this.headers = headers;
        return this;
    }
}