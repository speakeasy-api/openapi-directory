package openapisdk.models.operations;



public class GetUcsManagerResponse {
    public String contentType;
    public GetUcsManagerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUcsManagerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SwitchDataSource switchDataSource;
    public GetUcsManagerResponse withSwitchDataSource(openapisdk.models.shared.SwitchDataSource switchDataSource) {
        this.switchDataSource = switchDataSource;
        return this;
    }
}