package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetRefundTransactionLogQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetRefundTransactionLogQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}