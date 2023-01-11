package openapisdk.models.operations;



public class GetSuperfundResponse {
    public String contentType;
    public GetSuperfundResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSuperfundResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SuperFunds superFunds;
    public GetSuperfundResponse withSuperFunds(openapisdk.models.shared.SuperFunds superFunds) {
        this.superFunds = superFunds;
        return this;
    }
}