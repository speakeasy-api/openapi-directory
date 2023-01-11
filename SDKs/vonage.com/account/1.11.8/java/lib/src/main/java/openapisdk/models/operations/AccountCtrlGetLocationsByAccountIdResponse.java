package openapisdk.models.operations;



public class AccountCtrlGetLocationsByAccountIdResponse {
    public String contentType;
    public AccountCtrlGetLocationsByAccountIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationsHalResponse locationsHalResponse;
    public AccountCtrlGetLocationsByAccountIdResponse withLocationsHalResponse(openapisdk.models.shared.LocationsHalResponse locationsHalResponse) {
        this.locationsHalResponse = locationsHalResponse;
        return this;
    }
    public Long statusCode;
    public AccountCtrlGetLocationsByAccountIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}