package openapisdk.models.operations;



public class PostProcessSettingsBatchRequestResponse {
    public String contentType;
    public PostProcessSettingsBatchRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostProcessSettingsBatchRequestResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.SettingsBatchResponse settingsBatchResponse;
    public PostProcessSettingsBatchRequestResponse withSettingsBatchResponse(openapisdk.models.shared.SettingsBatchResponse settingsBatchResponse) {
        this.settingsBatchResponse = settingsBatchResponse;
        return this;
    }
    public Long statusCode;
    public PostProcessSettingsBatchRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}