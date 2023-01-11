package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentRunSummaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentRunId")
    public String paymentRunId;
    public GetPaymentRunSummaryPathParams withPaymentRunId(String paymentRunId) {
        this.paymentRunId = paymentRunId;
        return this;
    }
}