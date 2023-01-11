package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authEventId")
    public String authEventId;
    public GetConnectionsQueryParams withAuthEventId(String authEventId) {
        this.authEventId = authEventId;
        return this;
    }
}