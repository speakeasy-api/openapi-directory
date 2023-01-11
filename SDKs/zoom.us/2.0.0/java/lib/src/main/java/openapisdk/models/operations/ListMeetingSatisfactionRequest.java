package openapisdk.models.operations;



public class ListMeetingSatisfactionRequest {
    public ListMeetingSatisfactionQueryParams queryParams;
    public ListMeetingSatisfactionRequest withQueryParams(ListMeetingSatisfactionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMeetingSatisfactionSecurity security;
    public ListMeetingSatisfactionRequest withSecurity(ListMeetingSatisfactionSecurity security) {
        this.security = security;
        return this;
    }
}