package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetRefundTransactionLogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectGetRefundTransactionLogPathParams withId(String id) {
        this.id = id;
        return this;
    }
}