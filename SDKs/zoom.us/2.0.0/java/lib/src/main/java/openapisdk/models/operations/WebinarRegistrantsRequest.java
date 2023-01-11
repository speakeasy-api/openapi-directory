package openapisdk.models.operations;



public class WebinarRegistrantsRequest {
    public WebinarRegistrantsPathParams pathParams;
    public WebinarRegistrantsRequest withPathParams(WebinarRegistrantsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebinarRegistrantsQueryParams queryParams;
    public WebinarRegistrantsRequest withQueryParams(WebinarRegistrantsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebinarRegistrantsSecurity security;
    public WebinarRegistrantsRequest withSecurity(WebinarRegistrantsSecurity security) {
        this.security = security;
        return this;
    }
}