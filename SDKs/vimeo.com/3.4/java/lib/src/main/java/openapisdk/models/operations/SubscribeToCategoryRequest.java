package openapisdk.models.operations;



public class SubscribeToCategoryRequest {
    public SubscribeToCategoryPathParams pathParams;
    public SubscribeToCategoryRequest withPathParams(SubscribeToCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SubscribeToCategorySecurity security;
    public SubscribeToCategoryRequest withSecurity(SubscribeToCategorySecurity security) {
        this.security = security;
        return this;
    }
}