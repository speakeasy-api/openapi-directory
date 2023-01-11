import { SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
export declare enum LoginFormFormTypeEnum {
    Login = "login",
    QuestionAndAnswer = "questionAndAnswer",
    Token = "token",
    Image = "image"
}
export declare class LoginForm extends SpeakeasyBase {
    forgetPasswordURL?: string;
    formType?: LoginFormFormTypeEnum;
    help?: string;
    id?: number;
    loginHelp?: string;
    mfaInfoText?: string;
    mfaInfoTitle?: string;
    mfaTimeout?: number;
    row?: Row[];
}
