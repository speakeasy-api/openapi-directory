package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetPaymentMethodSnapshotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectGetPaymentMethodSnapshotPathParams withId(String id) {
        this.id = id;
        return this;
    }
}