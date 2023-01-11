package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public TransactionCategory withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification")
    public TransactionCategoryClassificationEnum classification;
    public TransactionCategory withClassification(TransactionCategoryClassificationEnum classification) {
        this.classification = classification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultCategoryName")
    public String defaultCategoryName;
    public TransactionCategory withDefaultCategoryName(String defaultCategoryName) {
        this.defaultCategoryName = defaultCategoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultHighLevelCategoryName")
    public String defaultHighLevelCategoryName;
    public TransactionCategory withDefaultHighLevelCategoryName(String defaultHighLevelCategoryName) {
        this.defaultHighLevelCategoryName = defaultHighLevelCategoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailCategory")
    public DetailCategory[] detailCategory;
    public TransactionCategory withDetailCategory(DetailCategory[] detailCategory) {
        this.detailCategory = detailCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highLevelCategoryId")
    public Long highLevelCategoryId;
    public TransactionCategory withHighLevelCategoryId(Long highLevelCategoryId) {
        this.highLevelCategoryId = highLevelCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highLevelCategoryName")
    public String highLevelCategoryName;
    public TransactionCategory withHighLevelCategoryName(String highLevelCategoryName) {
        this.highLevelCategoryName = highLevelCategoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public TransactionCategory withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public TransactionCategorySourceEnum source;
    public TransactionCategory withSource(TransactionCategorySourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TransactionCategoryTypeEnum type;
    public TransactionCategory withType(TransactionCategoryTypeEnum type) {
        this.type = type;
        return this;
    }
}