package openapisdk.models.operations;



public class RecordingRegistrantQuestionUpdateRequest {
    public RecordingRegistrantQuestionUpdatePathParams pathParams;
    public RecordingRegistrantQuestionUpdateRequest withPathParams(RecordingRegistrantQuestionUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecordingRegistrantQuestionUpdateRequests request;
    public RecordingRegistrantQuestionUpdateRequest withRequest(RecordingRegistrantQuestionUpdateRequests request) {
        this.request = request;
        return this;
    }
    public RecordingRegistrantQuestionUpdateSecurity security;
    public RecordingRegistrantQuestionUpdateRequest withSecurity(RecordingRegistrantQuestionUpdateSecurity security) {
        this.security = security;
        return this;
    }
}