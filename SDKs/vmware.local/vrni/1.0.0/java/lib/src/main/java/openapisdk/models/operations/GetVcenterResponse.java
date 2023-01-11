package openapisdk.models.operations;



public class GetVcenterResponse {
    public String contentType;
    public GetVcenterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVcenterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VCenterDataSource vCenterDataSource;
    public GetVcenterResponse withVCenterDataSource(openapisdk.models.shared.VCenterDataSource vCenterDataSource) {
        this.vCenterDataSource = vCenterDataSource;
        return this;
    }
}