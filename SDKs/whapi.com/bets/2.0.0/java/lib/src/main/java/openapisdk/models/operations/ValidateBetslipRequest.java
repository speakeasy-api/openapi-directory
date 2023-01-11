package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateBetslipRequest {
    public ValidateBetslipQueryParams queryParams;
    public ValidateBetslipRequest withQueryParams(ValidateBetslipQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ValidateBetslipHeaders headers;
    public ValidateBetslipRequest withHeaders(ValidateBetslipHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BetSlipRequest request;
    public ValidateBetslipRequest withRequest(openapisdk.models.shared.BetSlipRequest request) {
        this.request = request;
        return this;
    }
}