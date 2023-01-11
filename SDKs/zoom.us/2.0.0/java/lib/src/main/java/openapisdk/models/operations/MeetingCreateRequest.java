package openapisdk.models.operations;



public class MeetingCreateRequest {
    public MeetingCreatePathParams pathParams;
    public MeetingCreateRequest withPathParams(MeetingCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MeetingCreateRequests request;
    public MeetingCreateRequest withRequest(MeetingCreateRequests request) {
        this.request = request;
        return this;
    }
}