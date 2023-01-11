package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEntityConnectionsDenyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connection-id")
    public String connectionId;
    public PutEntityConnectionsDenyPathParams withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
}