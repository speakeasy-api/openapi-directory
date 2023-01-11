package openapisdk.models.operations;



public class RecordingsListRequest {
    public RecordingsListPathParams pathParams;
    public RecordingsListRequest withPathParams(RecordingsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecordingsListQueryParams queryParams;
    public RecordingsListRequest withQueryParams(RecordingsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RecordingsListSecurity security;
    public RecordingsListRequest withSecurity(RecordingsListSecurity security) {
        this.security = security;
        return this;
    }
}