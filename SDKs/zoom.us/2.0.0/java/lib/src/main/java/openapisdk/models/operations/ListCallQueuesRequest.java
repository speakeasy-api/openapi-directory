package openapisdk.models.operations;



public class ListCallQueuesRequest {
    public ListCallQueuesQueryParams queryParams;
    public ListCallQueuesRequest withQueryParams(ListCallQueuesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCallQueuesSecurity security;
    public ListCallQueuesRequest withSecurity(ListCallQueuesSecurity security) {
        this.security = security;
        return this;
    }
}