package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntitiesUserAccessiblePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetEntitiesUserAccessiblePathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}