package openapisdk.models.operations;



public class ListDatastoresRequest {
    public ListDatastoresQueryParams queryParams;
    public ListDatastoresRequest withQueryParams(ListDatastoresQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDatastoresSecurity security;
    public ListDatastoresRequest withSecurity(ListDatastoresSecurity security) {
        this.security = security;
        return this;
    }
}