package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaxationItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetTaxationItemPathParams withId(String id) {
        this.id = id;
        return this;
    }
}