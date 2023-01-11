package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSecurityGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSecurityGroupPathParams withId(String id) {
        this.id = id;
        return this;
    }
}