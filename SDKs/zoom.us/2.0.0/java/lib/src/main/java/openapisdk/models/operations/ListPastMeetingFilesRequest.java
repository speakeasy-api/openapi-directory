package openapisdk.models.operations;



public class ListPastMeetingFilesRequest {
    public ListPastMeetingFilesPathParams pathParams;
    public ListPastMeetingFilesRequest withPathParams(ListPastMeetingFilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListPastMeetingFilesSecurity security;
    public ListPastMeetingFilesRequest withSecurity(ListPastMeetingFilesSecurity security) {
        this.security = security;
        return this;
    }
}