package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEntityConnectionsDisconnectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connection-id")
    public String connectionId;
    public PutEntityConnectionsDisconnectPathParams withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
}