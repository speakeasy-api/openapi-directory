package openapisdk.models.operations;



public class UpdateNsxvManagerResponse {
    public String contentType;
    public UpdateNsxvManagerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NsxvManagerDataSource nsxvManagerDataSource;
    public UpdateNsxvManagerResponse withNsxvManagerDataSource(openapisdk.models.shared.NsxvManagerDataSource nsxvManagerDataSource) {
        this.nsxvManagerDataSource = nsxvManagerDataSource;
        return this;
    }
    public Long statusCode;
    public UpdateNsxvManagerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}