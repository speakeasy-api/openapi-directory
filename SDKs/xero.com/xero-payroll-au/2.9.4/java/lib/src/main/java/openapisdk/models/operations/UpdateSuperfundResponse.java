package openapisdk.models.operations;



public class UpdateSuperfundResponse {
    public String contentType;
    public UpdateSuperfundResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSuperfundResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SuperFunds superFunds;
    public UpdateSuperfundResponse withSuperFunds(openapisdk.models.shared.SuperFunds superFunds) {
        this.superFunds = superFunds;
        return this;
    }
}