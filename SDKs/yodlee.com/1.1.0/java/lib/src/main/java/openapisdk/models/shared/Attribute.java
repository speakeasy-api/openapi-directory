package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Attribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public AttributeContainerEnum[] container;
    public Attribute withContainer(AttributeContainerEnum[] container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerAttributes")
    public ContainerAttributes containerAttributes;
    public Attribute withContainerAttributes(ContainerAttributes containerAttributes) {
        this.containerAttributes = containerAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromDate")
    public String fromDate;
    public Attribute withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromFinYear")
    public String fromFinYear;
    public Attribute withFromFinYear(String fromFinYear) {
        this.fromFinYear = fromFinYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public AttributeNameEnum name;
    public Attribute withName(AttributeNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toDate")
    public String toDate;
    public Attribute withToDate(String toDate) {
        this.toDate = toDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toFinYear")
    public String toFinYear;
    public Attribute withToFinYear(String toFinYear) {
        this.toFinYear = toFinYear;
        return this;
    }
}