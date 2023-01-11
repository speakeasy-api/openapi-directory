package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors
 * Node Update Error description.
**/
public class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum category;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors withCategory(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("causes")
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses[] causes;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors withCauses(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses[] causes) {
        this.causes = causes;
        return this;
    }
    @JsonProperty("code")
    public String code;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorIdentifiers")
    public java.util.Map<String, java.util.Map<String, Object>> errorIdentifiers;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors withErrorIdentifiers(java.util.Map<String, java.util.Map<String, Object>> errorIdentifiers) {
        this.errorIdentifiers = errorIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public String info;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors withInfo(String info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum severity;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors withSeverity(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
}