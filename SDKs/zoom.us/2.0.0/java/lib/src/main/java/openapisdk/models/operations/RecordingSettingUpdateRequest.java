package openapisdk.models.operations;



public class RecordingSettingUpdateRequest {
    public RecordingSettingUpdatePathParams pathParams;
    public RecordingSettingUpdateRequest withPathParams(RecordingSettingUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecordingSettingUpdateSecurity security;
    public RecordingSettingUpdateRequest withSecurity(RecordingSettingUpdateSecurity security) {
        this.security = security;
        return this;
    }
}