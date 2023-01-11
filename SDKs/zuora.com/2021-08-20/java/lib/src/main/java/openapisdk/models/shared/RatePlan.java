package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class RatePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AmendmentId")
    public String amendmentId;
    public RatePlan withAmendmentId(String amendmentId) {
        this.amendmentId = amendmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AmendmentSubscriptionRatePlanId")
    public String amendmentSubscriptionRatePlanId;
    public RatePlan withAmendmentSubscriptionRatePlanId(String amendmentSubscriptionRatePlanId) {
        this.amendmentSubscriptionRatePlanId = amendmentSubscriptionRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AmendmentType")
    public String amendmentType;
    public RatePlan withAmendmentType(String amendmentType) {
        this.amendmentType = amendmentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public RatePlan withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public RatePlan withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public RatePlan withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("ProductRatePlanId")
    public String productRatePlanId;
    public RatePlan withProductRatePlanId(String productRatePlanId) {
        this.productRatePlanId = productRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionId")
    public String subscriptionId;
    public RatePlan withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public RatePlan withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public RatePlan withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}