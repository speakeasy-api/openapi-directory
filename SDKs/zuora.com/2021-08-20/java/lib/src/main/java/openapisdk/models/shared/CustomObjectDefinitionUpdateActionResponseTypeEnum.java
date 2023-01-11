package openapisdk.models.shared;


public enum CustomObjectDefinitionUpdateActionResponseTypeEnum {
    ADD_FIELD("addField"),
    DELETE_FIELD("deleteField"),
    UPDATE_FIELD("updateField"),
    UPDATE_OBJECT("updateObject"),
    RENAME_FIELD("renameField"),
    ADD_RELATIONSHIP("addRelationship"),
    DELETE_RELATIONSHIP("deleteRelationship");

    public final String value;

    private CustomObjectDefinitionUpdateActionResponseTypeEnum(String value) {
        this.value = value;
    }
}
