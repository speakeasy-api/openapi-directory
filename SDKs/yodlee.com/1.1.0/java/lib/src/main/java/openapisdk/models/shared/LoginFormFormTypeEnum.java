package openapisdk.models.shared;


public enum LoginFormFormTypeEnum {
    LOGIN("login"),
    QUESTION_AND_ANSWER("questionAndAnswer"),
    TOKEN("token"),
    IMAGE("image");

    public final String value;

    private LoginFormFormTypeEnum(String value) {
        this.value = value;
    }
}
