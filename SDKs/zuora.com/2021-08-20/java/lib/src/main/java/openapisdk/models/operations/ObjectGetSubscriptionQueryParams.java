package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetSubscriptionQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}