package openapisdk.models.operations;



public class PlaceSingleBetResponse {
    public String contentType;
    public PlaceSingleBetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PlaceSingleBetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BetDelayed[] betDelayedResponse;
    public PlaceSingleBetResponse withBetDelayedResponse(openapisdk.models.shared.BetDelayed[] betDelayedResponse) {
        this.betDelayedResponse = betDelayedResponse;
        return this;
    }
    public openapisdk.models.shared.BetPlaced[] betPlacedResponse;
    public PlaceSingleBetResponse withBetPlacedResponse(openapisdk.models.shared.BetPlaced[] betPlacedResponse) {
        this.betPlacedResponse = betPlacedResponse;
        return this;
    }
    public openapisdk.models.shared.Errors errors;
    public PlaceSingleBetResponse withErrors(openapisdk.models.shared.Errors errors) {
        this.errors = errors;
        return this;
    }
}