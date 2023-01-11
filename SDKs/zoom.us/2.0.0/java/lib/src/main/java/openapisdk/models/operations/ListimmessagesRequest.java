package openapisdk.models.operations;



public class ListimmessagesRequest {
    public ListimmessagesPathParams pathParams;
    public ListimmessagesRequest withPathParams(ListimmessagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListimmessagesQueryParams queryParams;
    public ListimmessagesRequest withQueryParams(ListimmessagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListimmessagesSecurity security;
    public ListimmessagesRequest withSecurity(ListimmessagesSecurity security) {
        this.security = security;
        return this;
    }
}