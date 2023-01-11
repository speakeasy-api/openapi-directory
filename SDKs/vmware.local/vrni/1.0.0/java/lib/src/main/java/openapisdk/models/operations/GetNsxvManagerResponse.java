package openapisdk.models.operations;



public class GetNsxvManagerResponse {
    public String contentType;
    public GetNsxvManagerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NsxvManagerDataSource nsxvManagerDataSource;
    public GetNsxvManagerResponse withNsxvManagerDataSource(openapisdk.models.shared.NsxvManagerDataSource nsxvManagerDataSource) {
        this.nsxvManagerDataSource = nsxvManagerDataSource;
        return this;
    }
    public Long statusCode;
    public GetNsxvManagerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}