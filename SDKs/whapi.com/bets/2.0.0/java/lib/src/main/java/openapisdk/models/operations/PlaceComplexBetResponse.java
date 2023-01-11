package openapisdk.models.operations;



public class PlaceComplexBetResponse {
    public String contentType;
    public PlaceComplexBetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PlaceComplexBetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BetDelayed[] betDelayedResponse;
    public PlaceComplexBetResponse withBetDelayedResponse(openapisdk.models.shared.BetDelayed[] betDelayedResponse) {
        this.betDelayedResponse = betDelayedResponse;
        return this;
    }
    public openapisdk.models.shared.BetPlaced[] betPlacedResponse;
    public PlaceComplexBetResponse withBetPlacedResponse(openapisdk.models.shared.BetPlaced[] betPlacedResponse) {
        this.betPlacedResponse = betPlacedResponse;
        return this;
    }
    public openapisdk.models.shared.Errors errors;
    public PlaceComplexBetResponse withErrors(openapisdk.models.shared.Errors errors) {
        this.errors = errors;
        return this;
    }
}