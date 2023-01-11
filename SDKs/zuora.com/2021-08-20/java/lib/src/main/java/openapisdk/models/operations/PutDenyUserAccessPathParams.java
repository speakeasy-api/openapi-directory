package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDenyUserAccessPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public PutDenyUserAccessPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}