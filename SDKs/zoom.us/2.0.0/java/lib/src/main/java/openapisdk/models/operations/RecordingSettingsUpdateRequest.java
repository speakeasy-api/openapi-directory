package openapisdk.models.operations;



public class RecordingSettingsUpdateRequest {
    public RecordingSettingsUpdatePathParams pathParams;
    public RecordingSettingsUpdateRequest withPathParams(RecordingSettingsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecordingSettingsUpdateRequests request;
    public RecordingSettingsUpdateRequest withRequest(RecordingSettingsUpdateRequests request) {
        this.request = request;
        return this;
    }
    public RecordingSettingsUpdateSecurity security;
    public RecordingSettingsUpdateRequest withSecurity(RecordingSettingsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}