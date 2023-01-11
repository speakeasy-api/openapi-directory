package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePaymentRunHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public DeletePaymentRunHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
}