package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolRemoveNodesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public PoolRemoveNodesPathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}