package openapisdk.models.operations;



public class WebinarAbsenteesRequest {
    public WebinarAbsenteesPathParams pathParams;
    public WebinarAbsenteesRequest withPathParams(WebinarAbsenteesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarAbsenteesQueryParams queryParams;
    public WebinarAbsenteesRequest withQueryParams(WebinarAbsenteesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebinarAbsenteesSecurity security;
    public WebinarAbsenteesRequest withSecurity(WebinarAbsenteesSecurity security) {
        this.security = security;
        return this;
    }
}