package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolExistsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public PoolExistsPathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}