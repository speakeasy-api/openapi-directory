package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectDeletePaymentMethodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectDeletePaymentMethodPathParams withId(String id) {
        this.id = id;
        return this;
    }
}