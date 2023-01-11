package openapisdk.models.operations;



public class AddNsxvManagerDatasourceResponse {
    public openapisdk.models.shared.ApiError apiError;
    public AddNsxvManagerDatasourceResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public AddNsxvManagerDatasourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NsxvManagerDataSource nsxvManagerDataSource;
    public AddNsxvManagerDatasourceResponse withNsxvManagerDataSource(openapisdk.models.shared.NsxvManagerDataSource nsxvManagerDataSource) {
        this.nsxvManagerDataSource = nsxvManagerDataSource;
        return this;
    }
    public Long statusCode;
    public AddNsxvManagerDatasourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}