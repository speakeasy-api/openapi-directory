package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRolesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetRolesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}