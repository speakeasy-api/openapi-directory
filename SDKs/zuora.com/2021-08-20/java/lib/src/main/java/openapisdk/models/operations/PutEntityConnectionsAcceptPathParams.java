package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEntityConnectionsAcceptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connection-id")
    public String connectionId;
    public PutEntityConnectionsAcceptPathParams withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
}