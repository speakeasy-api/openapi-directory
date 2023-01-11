package openapisdk.models.shared;


public enum CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum {
    MANY_TO_ONE("manyToOne"),
    ONE_TO_MANY("oneToMany");

    public final String value;

    private CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum(String value) {
        this.value = value;
    }
}
