package openapisdk.models.operations;



public class GetAllSummaryJournalEntriesRequest {
    public GetAllSummaryJournalEntriesPathParams pathParams;
    public GetAllSummaryJournalEntriesRequest withPathParams(GetAllSummaryJournalEntriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAllSummaryJournalEntriesQueryParams queryParams;
    public GetAllSummaryJournalEntriesRequest withQueryParams(GetAllSummaryJournalEntriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAllSummaryJournalEntriesHeaders headers;
    public GetAllSummaryJournalEntriesRequest withHeaders(GetAllSummaryJournalEntriesHeaders headers) {
        this.headers = headers;
        return this;
    }
}