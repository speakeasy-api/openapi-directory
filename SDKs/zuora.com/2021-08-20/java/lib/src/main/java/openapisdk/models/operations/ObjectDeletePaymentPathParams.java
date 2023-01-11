package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectDeletePaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectDeletePaymentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}