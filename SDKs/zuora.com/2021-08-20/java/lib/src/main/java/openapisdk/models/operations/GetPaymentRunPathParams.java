package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentRunId")
    public String paymentRunId;
    public GetPaymentRunPathParams withPaymentRunId(String paymentRunId) {
        this.paymentRunId = paymentRunId;
        return this;
    }
}