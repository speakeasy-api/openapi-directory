import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Name } from "./name";
import { UserResponsePreferences } from "./userresponsepreferences";
import { UserSession } from "./usersession";


export enum UserRoleTypeEnum {
    Individual = "INDIVIDUAL"
}


export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=loginName" })
  loginName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: Name;

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: UserResponsePreferences;

  @SpeakeasyMetadata({ data: "json, name=roleType" })
  roleType?: UserRoleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: UserSession;
}
