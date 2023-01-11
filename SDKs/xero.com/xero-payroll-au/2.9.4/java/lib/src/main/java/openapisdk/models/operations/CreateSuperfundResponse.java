package openapisdk.models.operations;



public class CreateSuperfundResponse {
    public String contentType;
    public CreateSuperfundResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSuperfundResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SuperFunds superFunds;
    public CreateSuperfundResponse withSuperFunds(openapisdk.models.shared.SuperFunds superFunds) {
        this.superFunds = superFunds;
        return this;
    }
}