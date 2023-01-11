package openapisdk.models.operations;



public class UpdateHpovManagerResponse {
    public openapisdk.models.shared.ApiError apiError;
    public UpdateHpovManagerResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public UpdateHpovManagerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateHpovManagerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SwitchDataSource switchDataSource;
    public UpdateHpovManagerResponse withSwitchDataSource(openapisdk.models.shared.SwitchDataSource switchDataSource) {
        this.switchDataSource = switchDataSource;
        return this;
    }
}