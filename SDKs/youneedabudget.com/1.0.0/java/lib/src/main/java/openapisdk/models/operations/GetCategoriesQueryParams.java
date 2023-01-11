package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_knowledge_of_server")
    public Long lastKnowledgeOfServer;
    public GetCategoriesQueryParams withLastKnowledgeOfServer(Long lastKnowledgeOfServer) {
        this.lastKnowledgeOfServer = lastKnowledgeOfServer;
        return this;
    }
}