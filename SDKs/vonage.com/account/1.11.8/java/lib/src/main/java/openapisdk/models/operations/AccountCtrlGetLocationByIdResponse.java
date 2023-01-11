package openapisdk.models.operations;



public class AccountCtrlGetLocationByIdResponse {
    public String contentType;
    public AccountCtrlGetLocationByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationHalResponse locationHalResponse;
    public AccountCtrlGetLocationByIdResponse withLocationHalResponse(openapisdk.models.shared.LocationHalResponse locationHalResponse) {
        this.locationHalResponse = locationHalResponse;
        return this;
    }
    public Long statusCode;
    public AccountCtrlGetLocationByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}