package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentRunDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentRunId")
    public String paymentRunId;
    public GetPaymentRunDataPathParams withPaymentRunId(String paymentRunId) {
        this.paymentRunId = paymentRunId;
        return this;
    }
}