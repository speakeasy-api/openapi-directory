package openapisdk.models.operations;



public class GetPanoramaFirewallResponse {
    public String contentType;
    public GetPanoramaFirewallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPanoramaFirewallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SwitchDataSource switchDataSource;
    public GetPanoramaFirewallResponse withSwitchDataSource(openapisdk.models.shared.SwitchDataSource switchDataSource) {
        this.switchDataSource = switchDataSource;
        return this;
    }
}