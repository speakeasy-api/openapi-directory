package openapisdk.models.operations;



public class UpdateDellSwitchResponse {
    public openapisdk.models.shared.ApiError apiError;
    public UpdateDellSwitchResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public UpdateDellSwitchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DellSwitchDataSource dellSwitchDataSource;
    public UpdateDellSwitchResponse withDellSwitchDataSource(openapisdk.models.shared.DellSwitchDataSource dellSwitchDataSource) {
        this.dellSwitchDataSource = dellSwitchDataSource;
        return this;
    }
    public Long statusCode;
    public UpdateDellSwitchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}