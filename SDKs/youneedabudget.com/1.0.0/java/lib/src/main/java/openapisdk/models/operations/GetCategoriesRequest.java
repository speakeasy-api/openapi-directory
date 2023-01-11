package openapisdk.models.operations;



public class GetCategoriesRequest {
    public GetCategoriesPathParams pathParams;
    public GetCategoriesRequest withPathParams(GetCategoriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCategoriesQueryParams queryParams;
    public GetCategoriesRequest withQueryParams(GetCategoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}