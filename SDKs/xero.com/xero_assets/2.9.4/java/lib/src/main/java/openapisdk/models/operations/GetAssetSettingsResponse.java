package openapisdk.models.operations;



public class GetAssetSettingsResponse {
    public String contentType;
    public GetAssetSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Setting setting;
    public GetAssetSettingsResponse withSetting(openapisdk.models.shared.Setting setting) {
        this.setting = setting;
        return this;
    }
    public Long statusCode;
    public GetAssetSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}