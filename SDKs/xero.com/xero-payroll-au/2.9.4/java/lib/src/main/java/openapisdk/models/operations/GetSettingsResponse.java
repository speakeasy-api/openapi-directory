package openapisdk.models.operations;



public class GetSettingsResponse {
    public String contentType;
    public GetSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingsObject settingsObject;
    public GetSettingsResponse withSettingsObject(openapisdk.models.shared.SettingsObject settingsObject) {
        this.settingsObject = settingsObject;
        return this;
    }
    public Long statusCode;
    public GetSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}