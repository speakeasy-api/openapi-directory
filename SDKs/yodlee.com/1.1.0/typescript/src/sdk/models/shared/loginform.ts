import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";


export enum LoginFormFormTypeEnum {
    Login = "login",
    QuestionAndAnswer = "questionAndAnswer",
    Token = "token",
    Image = "image"
}


export class LoginForm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forgetPasswordURL" })
  forgetPasswordURL?: string;

  @SpeakeasyMetadata({ data: "json, name=formType" })
  formType?: LoginFormFormTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=help" })
  help?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=loginHelp" })
  loginHelp?: string;

  @SpeakeasyMetadata({ data: "json, name=mfaInfoText" })
  mfaInfoText?: string;

  @SpeakeasyMetadata({ data: "json, name=mfaInfoTitle" })
  mfaInfoTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=mfaTimeout" })
  mfaTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=row", elemType: Row })
  row?: Row[];
}
