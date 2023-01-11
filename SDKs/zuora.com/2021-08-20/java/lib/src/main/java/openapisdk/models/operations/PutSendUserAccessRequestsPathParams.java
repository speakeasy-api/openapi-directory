package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSendUserAccessRequestsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public PutSendUserAccessRequestsPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}