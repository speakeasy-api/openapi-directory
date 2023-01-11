package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePaymentRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentRunId")
    public String paymentRunId;
    public DeletePaymentRunPathParams withPaymentRunId(String paymentRunId) {
        this.paymentRunId = paymentRunId;
        return this;
    }
}