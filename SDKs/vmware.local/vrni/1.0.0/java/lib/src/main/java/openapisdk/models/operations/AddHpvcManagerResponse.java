package openapisdk.models.operations;



public class AddHpvcManagerResponse {
    public openapisdk.models.shared.ApiError apiError;
    public AddHpvcManagerResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public AddHpvcManagerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddHpvcManagerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SwitchDataSource switchDataSource;
    public AddHpvcManagerResponse withSwitchDataSource(openapisdk.models.shared.SwitchDataSource switchDataSource) {
        this.switchDataSource = switchDataSource;
        return this;
    }
}