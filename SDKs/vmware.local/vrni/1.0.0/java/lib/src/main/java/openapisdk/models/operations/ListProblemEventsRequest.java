package openapisdk.models.operations;



public class ListProblemEventsRequest {
    public ListProblemEventsQueryParams queryParams;
    public ListProblemEventsRequest withQueryParams(ListProblemEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProblemEventsSecurity security;
    public ListProblemEventsRequest withSecurity(ListProblemEventsSecurity security) {
        this.security = security;
        return this;
    }
}