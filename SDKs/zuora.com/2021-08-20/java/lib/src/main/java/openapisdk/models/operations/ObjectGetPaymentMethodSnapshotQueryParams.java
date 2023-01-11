package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetPaymentMethodSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetPaymentMethodSnapshotQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}