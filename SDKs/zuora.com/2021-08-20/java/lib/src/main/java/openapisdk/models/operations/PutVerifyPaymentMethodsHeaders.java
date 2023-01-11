package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutVerifyPaymentMethodsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public PutVerifyPaymentMethodsHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
}