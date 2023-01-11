package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPaymentRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentRunId")
    public String paymentRunId;
    public PutPaymentRunPathParams withPaymentRunId(String paymentRunId) {
        this.paymentRunId = paymentRunId;
        return this;
    }
}