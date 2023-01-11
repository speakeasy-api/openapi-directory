package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserContactQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query_presence_status")
    public Boolean queryPresenceStatus;
    public GetUserContactQueryParams withQueryPresenceStatus(Boolean queryPresenceStatus) {
        this.queryPresenceStatus = queryPresenceStatus;
        return this;
    }
}