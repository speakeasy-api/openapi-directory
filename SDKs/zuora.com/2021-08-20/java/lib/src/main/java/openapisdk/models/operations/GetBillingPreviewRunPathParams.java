package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBillingPreviewRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billingPreviewRunId")
    public String billingPreviewRunId;
    public GetBillingPreviewRunPathParams withBillingPreviewRunId(String billingPreviewRunId) {
        this.billingPreviewRunId = billingPreviewRunId;
        return this;
    }
}