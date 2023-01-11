package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComputeNodeUpdateUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public ComputeNodeUpdateUserPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public ComputeNodeUpdateUserPathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userName")
    public String userName;
    public ComputeNodeUpdateUserPathParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}