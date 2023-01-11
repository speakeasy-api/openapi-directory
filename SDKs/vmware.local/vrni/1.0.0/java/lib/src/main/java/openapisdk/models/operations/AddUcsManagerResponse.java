package openapisdk.models.operations;



public class AddUcsManagerResponse {
    public openapisdk.models.shared.ApiError apiError;
    public AddUcsManagerResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public AddUcsManagerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddUcsManagerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SwitchDataSource switchDataSource;
    public AddUcsManagerResponse withSwitchDataSource(openapisdk.models.shared.SwitchDataSource switchDataSource) {
        this.switchDataSource = switchDataSource;
        return this;
    }
}