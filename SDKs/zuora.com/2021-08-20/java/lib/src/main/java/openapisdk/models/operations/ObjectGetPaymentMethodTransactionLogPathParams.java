package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetPaymentMethodTransactionLogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectGetPaymentMethodTransactionLogPathParams withId(String id) {
        this.id = id;
        return this;
    }
}