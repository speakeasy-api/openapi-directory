package openapisdk.models.operations;



public class GetDellSwitchResponse {
    public String contentType;
    public GetDellSwitchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DellSwitchDataSource dellSwitchDataSource;
    public GetDellSwitchResponse withDellSwitchDataSource(openapisdk.models.shared.DellSwitchDataSource dellSwitchDataSource) {
        this.dellSwitchDataSource = dellSwitchDataSource;
        return this;
    }
    public Long statusCode;
    public GetDellSwitchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}