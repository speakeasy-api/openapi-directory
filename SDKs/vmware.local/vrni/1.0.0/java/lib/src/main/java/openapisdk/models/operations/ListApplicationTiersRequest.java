package openapisdk.models.operations;



public class ListApplicationTiersRequest {
    public ListApplicationTiersPathParams pathParams;
    public ListApplicationTiersRequest withPathParams(ListApplicationTiersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListApplicationTiersSecurity security;
    public ListApplicationTiersRequest withSecurity(ListApplicationTiersSecurity security) {
        this.security = security;
        return this;
    }
}