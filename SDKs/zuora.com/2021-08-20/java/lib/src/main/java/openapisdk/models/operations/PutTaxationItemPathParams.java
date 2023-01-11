package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTaxationItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutTaxationItemPathParams withId(String id) {
        this.id = id;
        return this;
    }
}